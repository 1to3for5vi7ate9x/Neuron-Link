// Flux initialization wrapper
(function() {
  window.initFlux = function(canvas, settings) {
    if (!canvas) {
      console.error('Canvas element is required');
      return;
    }

    // Create a container for Elm
    const container = document.createElement('div');
    container.style.display = 'none';
    document.body.appendChild(container);

    // Load the main Flux script if not already loaded
    if (!window._fluxLoaded) {
      const script = document.createElement('script');
      script.src = '/flux/index.js';
      script.onload = function() {
        window._fluxLoaded = true;
        initFluxWithElm(container, canvas, settings);
      };
      document.body.appendChild(script);
    } else {
      initFluxWithElm(container, canvas, settings);
    }
  };

  function initFluxWithElm(container, canvas, settings) {
    try {
      const app = window.Elm.Main.init({
        node: container
      });

      if (app && app.ports && app.ports.initFlux) {
        // Initialize Flux with settings
        app.ports.initFlux.subscribe(function(defaultSettings) {
          const customSettings = {
            ...defaultSettings,
            ...settings,
            canvas: canvas
          };

          if (app.ports.setSettings) {
            app.ports.setSettings.send(customSettings);
          }
        });
      } else {
        console.error('Flux ports not available');
      }
    } catch (error) {
      console.error('Failed to initialize Flux:', error);
    }
  }
})();
