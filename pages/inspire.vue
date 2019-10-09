<template>
  <span v-touch:swipe.left="swipeHandler_left" v-touch:swipe.right="swipeHandler_right">
    <v-layout>
      <v-flex text-xs-center>
        <v-card>
          <v-card-title class="headline">
            感銘を受けた偉人の言葉、座右の銘みたいなもの
          </v-card-title>
        </v-card>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.content"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              :elevation="9"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.content"
              />
              <v-card-text
                class="fill-height align-end"
                v-text="card.name"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
  data: () => ({
    cards: [
      {
        content: 'No one learns as much about a subject as one who is forced to teach it.',
        name: 'Peter Drucker'
      },
      {
        content: '学問とはそれ自体が尊いものではない。学べ学べ、学んだすべてのものを世の人のために尽くしてこそ価値がある。',
        name: 'Yukio Yanagisawa (The principal at my old school)'
      },
      {
        content: 'People learn from their failures. Seldom do they learn anything from success.',
        name: 'Harold Sydney Geneen'
      },
      {
        content: '1.挨拶はきちんと',
        name: '勇者部5箇条(結城友奈は勇者であるシリーズ)'
      },
      {
        content: '2.なるべく諦めない',
        name: '勇者部5箇条(結城友奈は勇者であるシリーズ)'
      },
      {
        content: '3.よく寝て、よく食べる',
        name: '勇者部5箇条(結城友奈は勇者であるシリーズ)'
      },
      {
        content: '4.悩んだら相談',
        name: '勇者部5箇条(結城友奈は勇者であるシリーズ)'
      },
      {
        content: '5.なせば大抵なんとかなる',
        name: '勇者部5箇条(結城友奈は勇者であるシリーズ)'
      }
    ]
  }),
  methods: {
    swipeHandler_left() {
      location.href = '../skills'
    },
    swipeHandler_right() {
      location.href = '../history'
    }
  }
}
</script>

<style scoped>

</style>>
