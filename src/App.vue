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
             @click="cardIndex += 1">
        Next
      </v-btn>
      <v-btn v-else
             block
             @click="cardIndex = 0"
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
  import BirthdayCard from "./components/birthday-card";

  export default {
    name: 'app',
    components: {BirthdayCard, HappyBirthdayView, MovingBoxesView, ShowList},
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
    methods: {}
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
    text-align: center;
    min-width: 400px;
  }

  .bye-btn {
    background-color: lightcoral !important;
    color: white !important;
  }
</style>