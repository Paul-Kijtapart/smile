<template lang="html">
  <div id="app">
    <h1>Hello Parcel from Vue 📦 🚀</h1>
    <v-btn> Cool button</v-btn>
    <show-list></show-list>
    <moving-boxes-view></moving-boxes-view>
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

<style lang="css">
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
  }

  h1 {
    font-weight: 300;
  }
</style>