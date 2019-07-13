<template lang="html">
  <div id="app">
    <h1>Hello Parcel from Vue 📦 🚀</h1>
    <v-btn> Cool button</v-btn>
    <shows></shows>
  </div>
</template>

<script>
  import Shows from "./components/shows/shows";

  export default {
    name: 'app',
    components: {Shows}
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