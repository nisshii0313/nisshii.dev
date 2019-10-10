<template>
  <span v-touch:swipe.left="swipeHandler_left">
    <v-layout
      column
      justify-center
      align-center
    >
      <v-card>
        <v-card-title class="headline">
          Welcome to Nisshii's Portfolio site !!
        </v-card-title>
        <v-card-text>
          <p>
            名前<br>今西勇太
            <v-btn icon href="https://twitter.com/nishinishi172" aria-label="Twitter">
              <i class="fab fa-twitter" fa-10x />
            </v-btn>
            <v-btn icon href="https://www.facebook.com/profile.php?id=100018506530777" aria-label="Facebook">
              <i class="fab fa-facebook" fa-10x />
            </v-btn>
            <v-btn icon href="https://github.com/nisshii0313" aria-label="Github">
              <i class="fab fa-github" fa-10x />
            </v-btn>
            <v-btn icon href="https://nisshii18.hatenablog.com/" aria-label="Blog">
              <i class="fas fa-blog" fa-10x/>
            </v-btn>
          </p>
          <p>
            所属<br>東京理科大学理学部1部数学科3年
          </p>
          <p>
            今何やってるの<br>合同会社DMM.com(CTOのアシスタント)
          </p>
          <p>
            趣味<br>読書、麻雀、自転車旅
          </p>
          <p>
            持っている資格<br>応用情報技術者、基本情報技術者、FP3級、仏語検定4級、普通自動車免許(マニュアル)
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Yuta Imanishi</small></em>
          </div>
        </v-card-text>
      </v-card>
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
    }
  }
}
</script>
