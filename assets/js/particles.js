tsParticles.load("testimonials-particles", {
    "fullScreen": { "enable": false },
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#22a385" },
      "shape": {
        "type": "star",
        "stroke": { "width": 0, "color": "#22a385" },
        "polygon": { "nb_sides": 5 }
      },
      "opacity": { "value": 0.8 },
      "size": { "value": 3, "random": true },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "outModes": { "default": "out" }
      }
    },
    "interactivity": {
      "detectsOn": "canvas",
      "events": {
        "onHover": { "enable": false },
        "onClick": { "enable": false },
        "resize": true
      }
    },
    "retina_detect": true
  });
