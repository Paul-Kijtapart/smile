<template>
  <div class="birthday-card-wrapper">
    <!-- Card -->
    <div class="birthday-card">
      <!-- Title -->
      <h2 class="birthday-card-title">
        {{ message }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "birthday-card",
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {};
    }
  }
</script>

<style lang="scss" scoped>
  .birthday-card {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
    color: white;
    background-color: inherit;
  }

  .birthday-card-title {
    display: flex;
    justify-content: center;
    background-color: inherit;
    color: white;
    min-height: 200px;
  }
</style>