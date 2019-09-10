<template>
  <span v-touch:swipe.left="swipeHandler_left" v-touch:swipe.right="swipeHandler_right">
    <div class="Chart">
      <h2 style="text-align:center;">Skills</h2>
      <radar />
    </div>
  </span>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import Radar from '../components/Radar'

Vue.use(Vue2TouchEvents)

export default {
  components: { Radar },
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
