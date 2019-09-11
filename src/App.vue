<template lang="html">
  <div id="app">

    <!-- Content -->
    <div class="show-content">

      <!-- Card -->
      <template v-for="(message, index) in messages">
        <v-card v-if="cardIndex === index"
                :key="index"
                max-width="344"
                class="mx-auto"
                color="#26c6da"
                dark>
          <!-- Title -->
          <v-card-title>
            <v-icon large left>
              {{ message }}
            </v-icon>
          </v-card-title>
        </v-card>
      </template>

      <!-- Next btn -->
      <v-btn v-if="cardIndex < numMessages"
             @click="onNextClick">
        Next
      </v-btn>
      <v-btn v-else
             class="bye-btn">
        You've used your token for this year.
        Please do not refresh this page.
      </v-btn>

    </div>
  </div>
</template>

<script>
  import ShowList from "./components/show-list/show-list";
  import MovingBoxesView from "./views/moving-boxes-view";
  import HappyBirthdayView from "./views/happy-birthday-view";

  export default {
    name: 'app',
    components: {HappyBirthdayView, MovingBoxesView, ShowList},
    data: function () {
      return {
        cardIndex: 0,
        messages: [
          'Happy birthday :)',
          "You're seriously annoying.",
          "I mean you're pretty cool.",
          "I just wanna be with you.",
          "I mean I hope your dreams come true.",
          "Your 28 is going to be a great year.",
          "I will cheering for you."
        ]
      }
    },
    computed: {
      numMessages: function () {
        return this.messages.length;
      }
    },
    methods: {
      onNextClick: function () {
        this.cardIndex += 1;
      }
    }
  }
</script>

<style lang="scss">
  html,
  body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
    background-color: whitesmoke;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  }

  h1 {
    font-weight: 300;
  }

  .show-content {
    width: 100%;
    text-align: center;
  }

  .birthday-card {
    color: white;
  }

  .bye-btn {
    background-color: lightcoral !important;
    color: white !important;
  }
</style>