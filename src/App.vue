<template lang="html">
  <div id="app">
    <!-- Content -->
    <div class="show-content">
      <!-- Card -->
      <template v-for="(message, index) in messages">
        <birthday-card v-if="cardIndex === index"
                       :key="index"
                       class="mx-auto birthday-card"
                       color="#26c6da"
                       dark
                       :message="message">
        </birthday-card>
      </template>

      <!-- Next btn -->
      <v-btn v-if="cardIndex < numMessages"
             block
             class="next-btn"
             @click="cardIndex += 1">
        <v-icon left>mdi-arrow-right</v-icon>
        Next
      </v-btn>
      <v-btn v-else
             block
             @click="cardIndex = 0"
             class="bye-btn">
        <v-icon left>mdi-heart</v-icon>
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
  import BirthdayCard from "./components/birthday-card";

  export default {
    name: 'app',
    components: {BirthdayCard, HappyBirthdayView, MovingBoxesView, ShowList},
    data: function () {
      return {
        cardIndex: 0,
        messages: [
          'Happy Birthday :)',
          "You're seriously annoying.",
          "I mean you're pretty cool.",
          "I just wanna be with you.",
          "I mean I hope all of your dreams come true.",
          "28th is going to be a great year.",
          "I will be cheering for you."
        ]
      }
    },
    computed: {
      numMessages: function () {
        return this.messages.length;
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  html,
  body {
    height: 100%;
  }

  body {
    background-color: whitesmoke;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
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
    text-align: center;
    min-width: 400px;
  }

  .bye-btn {
    background-color: lightcoral !important;
    color: white !important;
  }

  .next-btn {
  }
</style>