<template lang="html">
  <div id="app">
    <happy-new-year></happy-new-year>
  </div>
</template>

<script>
  import HappyNewYear from "./happy-new-year-2019";

  export default {
    name: 'app',
    components: {HappyNewYear},
    data: function () {
      return {
        loading: false,
      }
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
</style>