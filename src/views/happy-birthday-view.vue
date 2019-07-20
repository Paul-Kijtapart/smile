<template>
  <div class="happy-birthday">
    <character-box v-for="(value,index) in happyBirthdayWord"
                   :key="index"
                   :value="value"
                   class="happy-birthday-char">
    </character-box>
  </div>
</template>

<script>
  import {TweenMax, Power2, Elastic} from "gsap/TweenMax";

  import CharacterBox from "../components/character-box";

  export default {
    name: "happy-birthday-view",
    components: {CharacterBox},
    data: function () {
      return {
        happyBirthdayWord: "Happy birthday :)"
      };
    },
    mounted() {
      // Start HappyBirthday animation.
      const fromStyle = {
        opacity: 0,
        y: 200,
        rotation: 360,
        scale: 2,
      };
      TweenMax.staggerFrom('.happy-birthday-char', 2, fromStyle, 0.5);
    }
  }
</script>

<style lang="scss" scoped>

</style>