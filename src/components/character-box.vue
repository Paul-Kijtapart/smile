<template>
  <v-chip class="character-box text-capitalize"
          color="green"
          text-color="white">
    {{ value }}
  </v-chip>
</template>

<script>
  export default {
    name: "character-box",
    props: {
      value: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>