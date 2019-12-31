<template>
  <div id="new-year-wrapper" class="happy-new-year">
    <!-- Congrat page -->
    <div v-if="pageIndex === 0" class="happy-new-year-page happy-new-year-page--congrat">
      <h1 class="new-year-wrapper-text new-year-wrapper-text--primary">
        Happy New Year 2020 <i class="new-year-wrapper-primary-icon fas fa-dragon"></i>
      </h1>
      <h3 class="new-year-wrapper-text new-year-wrapper-text--secondary">
        I am still cheering for you! That won't change any time soon.
      </h3>
    </div>

    <!-- Wish page -->
    <div v-else-if="pageIndex === 1" class="happy-new-year-page happy-new-year-page--wish">
      <!-- The cat -->
      <div class="wish-delivery">
      </div>
      <!-- Wish list -->
      <div class="wish-list">
        <h3 class="wish-item new-year-wrapper-text new-year-wrapper-text--wish">
          I hope you sleep more.
        </h3>
        <h3 class="wish-item new-year-wrapper-text new-year-wrapper-text--wish">
          Alcohol is bad! Stay with tea!
        </h3>
        <h3 class="wish-item new-year-wrapper-text new-year-wrapper-text--wish">
          I hope you meet someone who really cares for you
        </h3>
        <h3 class="wish-item new-year-wrapper-text new-year-wrapper-text--wish">
          I hope all your dreams come true.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  import "particles.js/particles";
  import newYearParticleConfig from "./assets/new-year-particles.json";

  export default {
    name: "happy-new-year",
    data: function () {
      return {
        pageIndex: 0
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

  .new-year-wrapper-primary-icon {
    color: green;
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

  .wish-delivery {
    width: 50px;
    height: 100%;
    background-image: url("http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 0px 50%;
  }

  .happy-new-year-page--wish {
    display: flex;
    flex-flow: row nowrap;
  }
</style>