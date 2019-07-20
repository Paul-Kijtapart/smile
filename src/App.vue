<template lang="html">
  <div id="app">

    <!-- Content -->
    <div class="show-content">
      <moving-boxes-view></moving-boxes-view>
    </div>
  </div>
</template>

<script>
  import ShowList from "./components/show-list/show-list";
  import MovingBoxesView from "./views/moving-boxes-view";

  export default {
    name: 'app',
    components: {MovingBoxesView, ShowList},
  }
</script>

<style lang="scss" scoped>
  html,
  body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-height: 100vh;
  }

  h1 {
    font-weight: 300;
  }

  .show-content {
    width: 100%;
    min-height: 500px;
    background-color: lightblue;
  }
</style>