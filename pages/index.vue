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
          Welcome to the Nisshii's Portfolio site !!
        </v-card-title>
        <v-card-text>
          <p>
            名前<br>今西勇太
            <v-btn icon href="https://twitter.com/nishinishi172" aria-label="Twitter">
              <i class="fab fa-twitter" fa-10x></i>
            </v-btn>
            <v-btn icon href="https://www.facebook.com/profile.php?id=100018506530777" aria-label="Facebook">
              <i class="fab fa-facebook" fa-10x></i>
            </v-btn>
            <v-btn icon href="https://github.com/nisshii0313" aria-label="Github">
              <i class="fab fa-github" fa-10x></i>
            </v-btn>
          </p>
          <p>
            所属<br>東京理科大学理学部1部数学科3年
          </p>
          <p>
            今何やってるの<br>合同会社DMM.com(CTOのアシスタント)、株式会社Shinonome(業務委託エンジニア)
          </p>
          <p>
            趣味<br>読書、麻雀、自転車旅
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Yuta Imanishi</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Top',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
