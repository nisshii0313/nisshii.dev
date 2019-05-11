<template>
  <span v-touch:swipe.left="swipeHandler_left" v-touch:swipe.right="swipeHandler_right">
    <v-layout>
      <v-flex text-xs-center>
        <v-card>
          <v-card-title class="headline">
            感銘を受けた偉人の言葉、座右の銘みたいなもの
          </v-card-title>
          <v-card-text>
            <blockquote class="blockquote">
              &#8220;No one learns as much about a subject as one who is forced to teach it.&#8221;
              <footer>
                <small>
                  <em>&mdash;Peter Drucker</em>
                </small>
              </footer>
            </blockquote>
            <blockquote class="blockquote">
              &#8220;学問とはそれ自体が尊いものではない。学べ学べ、学んだすべてのものを世の人のために尽くしてこそ価値がある.&#8221;
              <footer>
                <small>
                  <em>&mdash;Yukio Yanagisawa (The principal at my old school)</em>
                </small>
              </footer>
            </blockquote>
            <blockquote class="blockquote">
              &#8220;People learn from their failures. Seldom do they learn anything from success.&#8221;
              <footer>
                <small>
                  <em>&mdash;Harold Sydney Geneen</em>
                </small>
              </footer>
            </blockquote>
            <blockquote class="blockquote">
              &#8220;1.挨拶はきちんと&#8221;<br>
              &#8220;2.なるべく諦めない&#8221;<br>
              &#8220;3.よく寝て、よく食べる&#8221;<br>
              &#8220;4.悩んだら相談&#8221;<br>
              &#8220;5.なせば大抵なんとかなる&#8221;
              <footer>
                <small>
                  <em>&mdash;勇者部5箇条(結城友奈は勇者であるシリーズ)</em>
                </small>
              </footer>
            </blockquote>
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
      location.href = '../skills'
    },
    swipeHandler_right() {
      location.href = '../history'
    }
  }
}
</script>
