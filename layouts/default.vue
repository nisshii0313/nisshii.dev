<template>
  <v-app dark>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-items>
        <v-btn href="../">
          <p>Nisshii Portfolio</p>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn href="../skills">
          <p>Skills</p>
        </v-btn>
        <v-btn href="../history">
          <p>History</p>
        </v-btn>
        <v-btn href="../inspire">
          <p>Inspires</p>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer class="hidden-sm-and-up" position="fixed" bottom="0">
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn flat href="../skills">
          <span>Skills</span>
        </v-btn>
        <v-btn flat href="../history">
          <span>History</span>
        </v-btn>
        <v-btn flat href="../inspire">
          <span>Inspires</span>
        </v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style scoped>
.hidden-sm-and-up {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
