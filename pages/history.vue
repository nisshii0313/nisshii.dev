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
          My History
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
                2017/10~2018/11<br>Zens株式会社でReactを使ったWebフロントエンドエンジニアのインターン
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
</template>

<script>
export default {
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
