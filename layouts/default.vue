<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="new-dark-theme"
      dark
    >
      <v-toolbar-items>
        <v-btn href="../" :loading="loading" :disabled="loading" @click="loader = 'loading'">
          <p>Nisshii Portfolio</p>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn href="../skills" :loading="loading1" :disabled="loading1" @click="loader = 'loading1'">
          <p>Skills</p>
        </v-btn>
        <v-btn href="../history" :loading="loading2" :disabled="loading2" @click="loader = 'loading2'">
          <p>History</p>
        </v-btn>
        <v-btn href="../inspire" :loading="loading3" :disabled="loading3" @click="loader = 'loading3'">
          <p>Inspires</p>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container color="new-dark-theme" dark>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="hidden-sm-and-up" position="fixed" bottom="0" color="new-dark-theme" dark>
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn text href="../skills" :loading="loading1" :disabled="loading1" @click="loader = 'loading1'">
          <span>Skills</span>
        </v-btn>
        <v-btn text href="../history" :loading="loading2" :disabled="loading2" @click="loader = 'loading2'">
          <span>History</span>
        </v-btn>
        <v-btn text href="../inspire" :loading="loading3" :disabled="loading3" @click="loader = 'loading3'">
          <span>Inspires</span>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    }
  }
}
</script>

<style scoped>
.hidden-sm-and-up {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
