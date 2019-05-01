<template>
  <v-app dark>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-toolbar-items>
        <v-btn href="../">
          Top
        </v-btn>
        <v-btn href="../skills">
          Skills
        </v-btn>
        <v-btn href="../history">
          History
        </v-btn>
        <v-btn href="../inspire">
          Inspires
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nisshii Portfolio'
    }
  }
}
</script>
