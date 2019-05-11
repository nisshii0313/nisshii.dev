<template>
  <span v-touch:swipe.left="swipeHandler_left" v-touch:swipe.right="swipeHandler_right">
    <v-layout
      column
      justify-center
      align-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <v-card>
          <v-card-title class="headline">
            書けるor書いたことある言語たち
          </v-card-title>
          <v-card-text>
            JavaScript(Node.js/React/Vue/Nuxt)
            <v-slider
              readonly
              value="70"
            />
            Golang
            <v-slider
              readonly
              value="75"
            />
            Ruby
            <v-slider
              readonly
              value="70"
            />
            Kotlin/Dart
            <v-slider
              readonly
              value="75"
            />
            C
            <v-slider
              readonly
              value="40"
            />
            Solidity
            <v-slider
              readonly
              value="50"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
  methods: {
    swipeHandler_left() {
      location.href = '../history'
    },
    swipeHandler_right() {
      location.href = '../inspire'
    }
  }
}
</script>
