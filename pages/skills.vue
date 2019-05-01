<template>
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
          <p>
            JavaScript(Node.js/React/Vue/Nuxt)
            <no-ssr><star-rating :rating="3.5" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
        <v-card-text>
          <p>
            Golang
            <no-ssr><star-rating :rating="3.5" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
        <v-card-text>
          <p>
            Ruby
            <no-ssr><star-rating :rating="3.0" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
        <v-card-text>
          <p>
            Kotlin/Dart
            <no-ssr><star-rating :rating="2.5" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
        <v-card-text>
          <p>
            C
            <no-ssr><star-rating :rating="2.0" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
        <v-card-text>
          <p>
            Solidity
            <no-ssr><star-rating :rating="3.0" :read-only="true" :increment="0.01"></star-rating></no-ssr>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  metaInfo: {
    title: 'History',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
