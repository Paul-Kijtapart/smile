<template>
  <div class="birthday-card-wrapper">
    <!-- Card -->
    <v-card v-bind="$attrs"
            class="birthday-card">
      <!-- Title -->
      <v-card-title class="birthday-card-title">
        <v-icon large left>
          {{ message }}
        </v-icon>
      </v-card-title>
    </v-card>
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
    }
  }
</script>

<style lang="scss" scoped>
  .birthday-card {
    color: white;
  }

  .birthday-card-title {
    display: flex;
    justify-content: center;
  }
</style>