<template>
  <div id="new-year-wrapper" class="happy-new-year">
    <h1 class="new-year-wrapper-text new-year-wrapper-text--primary">
      Happy New Year 2020
    </h1>
    <h3 class="new-year-wrapper-text new-year-wrapper-text--secondary">
      I am still cheering for you!
    </h3>
    <h3 class="new-year-wrapper-text new-year-wrapper-text--wish">
      I hope you sleep more.
    </h3>
    <h3 class="new-year-wrapper-text new-year-wrapper-text--wish">
      Alcohol is bad! Stay with tea!
    </h3>
    <h3 class="new-year-wrapper-text new-year-wrapper-text--wish">
      I hope you meet someone who really cares for you
    </h3>
    <h3 class="new-year-wrapper-text new-year-wrapper-text--wish">
      I hope all your dreams come true.
    </h3>
  </div>
</template>

<script>
  import "particles.js/particles";
  import newYearParticleConfig from "./assets/new-year-particles.json";

  export default {
    name: "happy-new-year",
    data: function () {
      return {
        testParticleConfig: {
          "particles": {
            "number": {
              "value": 380,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }
      };
    },
    mounted() {
      console.log(newYearParticleConfig);
      particlesJS('new-year-wrapper', newYearParticleConfig);
    }
  }
</script>

<style lang="scss">
  html,
  body {
    height: 100%;
  }

  body {
  }

  .happy-new-year {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #000337;
    cursor: pointer;
    padding: 20px 10px;
    background-image: url("http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 0px 50%;
  }

  .happy-new-year {
    .particles-js-canvas-el {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100% !important;
      height: 100% !important;
    }
  }

  .new-year-wrapper-text {
    color: white;
    margin-bottom: 20px;
  }

  .new-year-wrapper-text--primary {
    font-size: 4em;
    margin-bottom: 40px;
  }

  .new-year-wrapper-text--secondary {
    font-size: 2em;
    margin-bottom: 30px;
  }

  .new-year-wrapper-main-text {
  }

  .new-year-wrapper-text--wish {

  }
</style>