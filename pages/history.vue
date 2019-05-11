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
            僕のこれまでの経歴
          </v-card-title>
          <v-card-text>
            <p>
              2014/03<br>中学卒業、高校入学
            </p>
            <p>
              2017/03<br>高校卒業(青→白→黄→紫→橙→橙)
            </p>
            <p>
              2017/04<br>大学入学
            </p>
            <p>
              2017/10~2018/11<br>Zens株式会社でReactを使ったWebフロントエンドエンジニアのインターン<br>
              作ったプロダクトは
              <a href="https://zenshome.jp/">
                こちら
              </a>
            </p>
            <p>
              2018/06~<br>株式会社Shinonomeの業務委託エンジニア
            </p>
            <p>
              2018/11~<br>合同会社DMM.comのCTOのアシスタント
            </p>
            <div class="text-xs-right">
              <em><small>&mdash; My History</small></em>
            </div>
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
      location.href = '../inspire'
    },
    swipeHandler_right() {
      location.href = '../skills'
    }
  }
}
</script>
