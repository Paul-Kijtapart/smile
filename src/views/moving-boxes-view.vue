<template>
  <div class="moving-boxes">
    <h1> This is my moving boxes views </h1>
    <v-btn @click="moveRight">
      Start moving
    </v-btn>

    <!-- box1 -->
    <div class="box-1"
         ref="box1">
      Box1
    </div>
  </div>
</template>

<script>
  import {TweenMax, Power2, Elastic} from "gsap/TweenMax";

  export default {
    name: "moving-boxes-view",
    methods: {
      moveRight: function () {
        TweenMax.to('.box-1', 2, {
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          color: 'white',
          left: 300
        });
      }
    },
  }
</script>

<style lang="scss" scoped>

  .moving-boxes {
    width: 100%;
    height: 100%;
  }

  .box-1 {
    height: 50px;
    width: 50px;
    background-color: lightcoral;
    border: 1px black;
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
  }
</style>