<template>
  <span v-touch:swipe.left="swipeHandler_left" v-touch:swipe.right="swipeHandler_right">
    <v-layout
      column
      justify-center
      align-center
    >
      <v-card>
        <v-card-title>経歴</v-card-title>
        <v-card-text>(中長期の就業型インターンシップは含めていますが、短期(1日)やハッカソンは含めていません)</v-card-text>
      </v-card>
      <v-timeline v-show="show" class="ura">
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2017/3</span>
          </template>
          <v-card max-width="500px" height="100%">
            <v-card-title>高校卒業</v-card-title>
          </v-card>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2017/4</span>
          </template>
          <v-card max-width="500px" height="100%">
            <v-card-title>大学入学</v-card-title>
          </v-card>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2017/10~2018/11</span>
          </template>
          <v-card max-width="500px" height="100%" @click.stop="dialog1 = true">
            <v-card-title>Zens株式会社</v-card-title>
            <v-card-text>フロントエンド</v-card-text>
          </v-card>

          <v-dialog v-model="dialog1" scrollable max-width="80%">
            <v-card>
              <v-card-title>Zens株式会社(フロント)</v-card-title>
              <v-card-text height="200px">
                Reactを使ったWebフロントエンドエンジニアのインターンをさせていただきました。<br>
                作ったプロダクトは
                <a href="https://zenshome.jp/">こちら</a>です。
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2018/6~</span>
          </template>
          <v-card max-width="500px" height="100%" @click.stop="dialog2 = true">
            <v-card-title>株式会社Shinonome</v-card-title>
            <v-card-text>Dapps/Web</v-card-text>
          </v-card>

          <v-dialog v-model="dialog2" scrollable max-width="80%">
            <v-card>
              <v-card-title>株式会社Shinonome(Dapps/Web)</v-card-title>
              <v-card-text height="200px">業務委託のエンジニアとしてブロックチェーン技術を用いたアプリケーション開発を行いました</v-card-text>
            </v-card>
          </v-dialog>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2018/11~</span>
          </template>
          <v-card max-width="500px" height="100%" @click.stop="dialog3 = true">
            <v-card-title>合同会社DMM.com</v-card-title>
            <v-card-text>CTOアシスタント</v-card-text>
          </v-card>

          <v-dialog v-model="dialog3" scrollable max-width="80%">
            <v-card>
              <v-card-title>合同会社DMM.com(CTOアシスタント)</v-card-title>
              <v-card-text height="200px">松本CTOのアシスタントとして諸業務を行なっています。詳細は社外秘です...。</v-card-text>
            </v-card>
          </v-dialog>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2019/7~2019/8</span>
          </template>
          <v-card max-width="500px" height="100%" @click.stop="dialog4 = true">
            <v-card-title>株式会社ミクシィ</v-card-title>
            <v-card-text>バックエンド・インフラ</v-card-text>
          </v-card>

          <v-dialog v-model="dialog4" scrollable max-width="80%">
            <v-card>
              <v-card-title>株式会社ミクシィ(バックエンド・インフラ)</v-card-title>
              <v-card-text height="200px">
                夏インターンをさせていただきました。新規事業部にて、
                セキュリティ脆弱性対応やサーバー監視など、それまであまり触ってこなかった
                アプリケーションを下支えする部分を担当させていただきました。<br>
                詳細は<a href="https://nisshii18.hatenablog.com/entry/2019/09/07/110605">こちら</a>です。
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-timeline-item>
        <v-timeline-item small>
          <template v-slot:opposite>
            <span>2019/8/26~8/30</span>
          </template>
          <v-card max-width="500px" height="100%" @click.stop="dialog5 = true">
            <v-card-title>サイボウズ株式会社</v-card-title>
            <v-card-text>Web</v-card-text>
          </v-card>

          <v-dialog v-model="dialog5" scrollable max-width="80%">
            <v-card>
              <v-card-title>サイボウズ株式会社(Web)</v-card-title>
              <v-card-text height="200px">
                夏インターン第二タームのWebサービス開発コースに参加させていただきました。
                「Kinone」というアプリケーションに新機能を実装するという課題で、仕様書を書いたり、モブプロをして実装しました。
                詳細は<a href="https://nisshii18.hatenablog.com/entry/2019/09/14/114247">こちら</a>です。
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </span>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      show: 0
    }
  },
  computed: {
    shortenedContent() {
      const maxlength = 100
      if (this.content.length <= maxlength) {
        return this.content
      } else {
        return this.content.substr(0, maxlength - 10) + '...(続きを読む）'
      }
    }
  },
  created() {
    setTimeout(() => (this.show = 1), 50)
  },
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

<style scoped>
.ura {
  z-index: 0;
}
</style>
