'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector2, ShaderMaterial, Color } from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

const fragmentShader = `
  uniform float time;
  uniform vec2 mouse;
  uniform vec2 resolution;
  uniform vec3 colorA;
  uniform vec3 colorB;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 mouseNorm = mouse / resolution.xy;
    
    float dist = length(uv - mouseNorm);
    float angle = atan(uv.y - mouseNorm.y, uv.x - mouseNorm.x);
    
    float flowStrength = 0.05;
    float flowSpeed = 0.5;
    float noiseScale = 10.0;
    
    float flow = sin(angle * 8.0 + time * flowSpeed + dist * noiseScale) * flowStrength;
    dist += flow;
    
    vec3 color = mix(colorA, colorB, smoothstep(0.0, 1.0, dist));
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

function FlowingShader() {
  const mesh = useRef<THREE.Mesh>();
  const { viewport, size } = useThree();
  const mousePosition = useMousePosition();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      mouse: { value: new Vector2(0, 0) },
      resolution: { value: new Vector2(size.width, size.height) },
      colorA: { value: new Color('#00ff87') },
      colorB: { value: new Color('#0077ff') },
    }),
    [size]
  );

  useFrame((state) => {
    if (!mesh.current) return;
    
    const material = mesh.current.material as ShaderMaterial;
    material.uniforms.time.value = state.clock.getElapsedTime();
    material.uniforms.mouse.value.x = mousePosition.x;
    material.uniforms.mouse.value.y = size.height - mousePosition.y;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function FlowingBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FlowingShader />
      </Canvas>
    </div>
  );
}
