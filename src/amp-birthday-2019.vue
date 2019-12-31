<template>
  <div class="ampb-birthday">
    <!-- Content -->
    <div class="show-content"
         :style="showContentStyle[cardIndex]">
      <div class="door-content">
        <!-- Card -->
        <template v-for="(message, index) in messages">
          <birthday-card v-if="cardIndex === index"
                         :key="index"
                         :message="message">
          </birthday-card>
        </template>

        <!-- Next btn -->
        <div class="door-knob">
          <!-- Normal state -->
          <v-btn v-if="cardIndex < numMessages"
                 :loading="loading"
                 :disabled="loading"
                 :class="['door-knob__content','next-btn','next-btn--loading',loading? 'next-btn--loading': '' ]"
                 fab
                 x-small
                 @click="onNextClick">
            <!-- Spinner -->
            <div class="door-knob__spinner"></div>
            <!-- Loading content -->
            <template v-slot:loader>
              <span> {{ btnLoadingTexts[cardIndex] }} </span>
            </template>
          </v-btn>
          <!-- End state -->
          <div v-else
               :class="['door-knob__content', 'bye-btn']">
            <div> You've used your token for this year.</div>
            <div> Please do not refresh this page.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShowList from "./components/show-list/show-list";
  import MovingBoxesView from "./views/moving-boxes-view";
  import HappyBirthdayView from "./views/happy-birthday-view";
  import BirthdayCard from "./components/birthday-card";

  export default {
    name: "amp-2019-birthday",
    components: {BirthdayCard, HappyBirthdayView, MovingBoxesView, ShowList},
    data: function () {
      return {
        cardIndex: 0,
        messages: [
          'Happy Birthday :)',
          "You're seriously annoying...",
          "Like seriously.",
          "I mean you're pretty cool.",
          "Like really cool.",
          "I hope all your dreams come true.",
          "28th is going to be a great year.",
          "I will be cheering for you."
        ],
        btnLoadingTexts: [
          'Thinking...',
          "Wait...",
          ":/",
          "<3",
          "<3333333",
          ":)",
          ":D",
          ":3"
        ],
        showContentStyle: [
          {'background-color': "#2D728F", 'color': 'white'},
          {'background-color': "#3B8EA5", 'color': 'white'},
          {'background-color': "#C7CB85", 'color': 'white'},
          {'background-color': "#F49E4C", 'color': 'white'},
          {'background-color': "#AB3428", 'color': 'white'},
          {'background-color': "#2D728F", 'color': 'white'},
          {'background-color': "#3B8EA5", 'color': 'white'},
          {'background-color': "#C7CB85", 'color': 'white'},
        ],
        loading: false,
      }
    },
    computed: {
      numMessages: function () {
        return this.messages.length;
      }
    },
    methods: {
      onNextClick: function () {
        this.loading = true;
        setTimeout(() => {
          this.cardIndex += 1;
          this.loading = false;
        }, 1500);
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,
  body {
    height: 100%;
  }

  body {
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
  }

  h1 {
    font-weight: 300;
  }

  .show-content {
    min-width: 600px;
    height: 80%;
    border-radius: 50px 50px 0px 0px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bye-btn {
    border-radius: 50px;
    padding: 10px 20px;
    background-color: lightcoral !important;
    color: white !important;
    text-align: center;
  }

  .next-btn--loading {
    font-weight: bolder;
  }

  .next-btn {
  }

  .next-btn--loading {
    background-color: orange;
  }

  .door-content {
    width: 100%;
  }

  .door-knob {
    text-align: right;
  }

  .door-knob__content {
  }

  .door-knob__spinner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: slategray;
  }
</style>