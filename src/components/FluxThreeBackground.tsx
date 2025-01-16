'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';

const TEXTURE_WIDTH = 512;
const TEXTURE_HEIGHT = 512;

// Shader for velocity computation
const velocityShader = `
  uniform float deltaT;
  uniform float flowForce;
  uniform vec2 mouse;
  uniform bool isMouseDown;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 velocity = texture2D(textureVelocity, uv).xy;
    
    // Add mouse force
    if (isMouseDown) {
      vec2 mouseVec = mouse - uv;
      float dist = length(mouseVec);
      if (dist < 0.1) {
        velocity += normalize(mouseVec) * flowForce * (1.0 - dist / 0.1);
      }
    }
    
    // Apply some fluid dynamics
    velocity += curl(uv) * 0.3;
    
    // Decay
    velocity *= 0.99;
    
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

// Shader for particle positions
const positionShader = `
  uniform sampler2D textureVelocity;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec2 vel = texture2D(textureVelocity, pos.xy).xy;
    
    // Update position based on velocity
    pos.xy += vel * 0.001;
    
    // Wrap around edges
    pos.x = mod(pos.x + 1.0, 1.0);
    pos.y = mod(pos.y + 1.0, 1.0);
    
    gl_FragColor = pos;
  }
`;

// Vertex shader for particles
const particleVertexShader = `
  attribute vec2 reference;
  uniform sampler2D texturePosition;
  uniform float pointSize;
  
  void main() {
    vec4 pos = texture2D(texturePosition, reference);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.xy * 2.0 - 1.0, 0.0, 1.0);
    gl_PointSize = pointSize;
  }
`;

// Fragment shader for particles
const particleFragmentShader = `
  uniform vec3 color;
  
  void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    if (r > 0.5) discard;
    gl_FragColor = vec4(color, 1.0 - r * 2.0);
  }
`;

interface FluxThreeBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  particleSize?: number;
  flowForce?: number;
  color?: [number, number, number];
}

export default function FluxThreeBackground({
  className,
  style,
  particleCount = 100000,
  particleSize = 2,
  flowForce = 30,
  color = [1, 0.5, 0.2]
}: FluxThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({
    x: 0,
    y: 0,
    isDown: false
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    
    const gpuCompute = new GPUComputationRenderer(TEXTURE_WIDTH, TEXTURE_HEIGHT, renderer);
    
    // Initialize textures
    const positionTexture = gpuCompute.createTexture();
    const velocityTexture = gpuCompute.createTexture();
    
    // Initialize positions randomly
    const posArray = positionTexture.image.data;
    for (let i = 0; i < posArray.length; i += 4) {
      posArray[i] = Math.random();
      posArray[i + 1] = Math.random();
      posArray[i + 2] = 0;
      posArray[i + 3] = 1;
    }
    
    // Create computation variables
    const velocityVariable = gpuCompute.addVariable('textureVelocity', velocityShader, velocityTexture);
    const positionVariable = gpuCompute.addVariable('texturePosition', positionShader, positionTexture);
    
    gpuCompute.setVariableDependencies(velocityVariable, [velocityVariable]);
    gpuCompute.setVariableDependencies(positionVariable, [positionVariable, velocityVariable]);
    
    const uniforms = velocityVariable.material.uniforms;
    uniforms.deltaT = { value: 0.0 };
    uniforms.flowForce = { value: flowForce };
    uniforms.mouse = { value: new THREE.Vector2(0, 0) };
    uniforms.isMouseDown = { value: false };
    
    // Initialize computation
    gpuCompute.init();
    
    // Create particle system
    const geometry = new THREE.BufferGeometry();
    const references = new Float32Array(particleCount * 2);
    
    for (let i = 0; i < particleCount; i++) {
      references[i * 2] = (i % TEXTURE_WIDTH) / TEXTURE_WIDTH;
      references[i * 2 + 1] = Math.floor(i / TEXTURE_WIDTH) / TEXTURE_HEIGHT;
    }
    
    geometry.setAttribute('reference', new THREE.BufferAttribute(references, 2));
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        texturePosition: { value: null },
        pointSize: { value: particleSize },
        color: { value: new THREE.Color(...color) }
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
    };
    
    // Handle mouse events
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = (event.clientX - rect.left) / rect.width;
      mouseRef.current.y = 1 - (event.clientY - rect.top) / rect.height;
    };
    
    const handleMouseDown = () => {
      mouseRef.current.isDown = true;
    };
    
    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };
    
    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      uniforms.deltaT.value = 0.016;
      uniforms.mouse.value.set(mouseRef.current.x, mouseRef.current.y);
      uniforms.isMouseDown.value = mouseRef.current.isDown;
      
      gpuCompute.compute();
      material.uniforms.texturePosition.value = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Setup
    containerRef.current.appendChild(renderer.domElement);
    handleResize();
    
    window.addEventListener('resize', handleResize);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
    };
  }, [particleCount, particleSize, flowForce, color]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
}
