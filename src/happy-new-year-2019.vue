<template>
  <div id="new-year-wrapper" class="happy-new-year">
    <!-- Congrat page -->
    <div v-if="pageIndex === 0" class="happy-new-year-page happy-new-year-page--congrat">
      <h1 class="new-year-wrapper-text new-year-wrapper-text--primary">
        Happy New Year 2020
        <i v-if="!hasClick"
           @click="GoToWishPage"
           class="new-year-wrapper-primary-icon fas fa-dragon"></i>
        <span style="font-size: 0.5em; color: grey" v-else> watching dragons fly...</span>
      </h1>
      <div class="new-year-wrapper-text new-year-wrapper-text--secondary">
        I am still cheering for you! That won't change any time soon.
      </div>

      <!-- dragon fly pass the page -->
      <div class="dragon-list-wrapper">
        <div class="dragon-list">
          <div v-for="i in 7"
               :key="i"
               class="dragon-item">
            <i :style="{'color': rainbowPalette[i - 1]}"
               :class="`dragon-item__icon--${i}`"
               class="dragon-item__icon fas fa-dragon">
            </i>
          </div>
        </div>
      </div>
    </div>

    <!-- Wish page -->
    <div v-else-if="pageIndex === 1" class="happy-new-year-page happy-new-year-page--wish">
      <!-- The cat -->
      <div ref="wish-delivery"
           class="wish-delivery">
      </div>
      <!-- Wish list -->
      <div class="wish-list-wrapper">
        <div class="wish-list">
          <div v-for="(wish, i) in wishes"
               :key="wish"
               :class="`wish-item--${i}`"
               class="wish-item new-year-wrapper-text new-year-wrapper-text--wish"
               v-html="wish">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "particles.js/particles";
  import newYearParticleConfig from "./assets/new-year-particles.json";
  import gsap from "gsap";

  export default {
    name: "happy-new-year",
    data: function () {
      return {
        pageIndex: 0,

        rainbowPalette: [
          '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'
        ],
        hasClick: false,

        wishes: [
          'I hope you sleep more. <i class="fas fa-bed"></i>',
          'Alcohol is bad! Stay with tea! <i class="far fa-grin-beam-sweat"></i>',
          ' I hope you meet someone who really cares for you. <i class="far fa-smile"></i>',
          'I hope all your dreams come true. <i class="far fa-heart"></i>'
        ]
      };
    },
    methods: {
      GoToWishPage: function () {
        this.hasClick = true;

        this.$nextTick(() => {
          const tl = gsap.timeline();

          // Run them dragons.
          this.rainbowPalette.forEach((_, i) => {
            tl.fromTo(`.dragon-item__icon--${i}`,
                0.7,
                {opacity: 1, left: '-50px'},
                {left: '100%', opacity: 1, ease: 'back'});
          });

          // Go to next page.
          tl.add(() => {
            this.pageIndex += 1;

            this.$nextTick(() => {
              const wishDelivery = this.$refs['wish-delivery'];
              tl.to(wishDelivery, 2, {
                'flex-grow': '1',
                duration: 3,
              });
            });
          });
        })
      }
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

  .particles-js-canvas-el {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100% !important;
    height: 100% !important;
  }

  .happy-new-year {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #000337;
    cursor: pointer;
    padding: 20px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .happy-new-year-page--congrat {
    z-index: 1;
  }

  .happy-new-year-page--wish {
    width: 100%;
    height: 100%;
  }

  .new-year-wrapper-primary-icon {
    color: green;

    &:hover {
      color: red;
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
    font-size: 2em;
  }

  .wish-list-wrapper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .wish-list {
    padding: 20px 10px;
    background-color: rgba(250, 250, 250, 0.1);
    border-radius: 25px;
  }

  .wish-item {
    margin-bottom: 20px;
  }

  .wish-delivery {
    height: 100%;
    background-image: url("http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px 50%;
  }

  .happy-new-year-page--wish {
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
  }

  .dragon-list-wrapper {
    /*visibility: hidden;*/
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .dragon-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }

  .dragon-item {
    .dragon-item__icon {
      position: relative;
      font-size: 40px;
      opacity: 0;
    }
  }
</style>