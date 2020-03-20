<template>
  <v-app>

    <MainNavigationDrawer @drawerStateChanged="setDrawer" v-model="drawerOpen" />

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
      >
        <v-icon
          v-if="['Home', 'Sheets', 'Settings', 'About'].includes($route.name)"
          @click.stop="drawerOpen = !drawerOpen"
        >mdi-menu</v-icon>

        <v-btn
          v-else
          icon
          to="/sheets"
          exact
        >
          <v-icon>mdi-book-open-page-variant</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ songbookName }} Songbook
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import MainNavigationDrawer from '@/components/MainNavigationDrawer.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { MainNavigationDrawer },
  data: () => ({
    drawerOpen: false
  }),
  computed: {
    ...mapGetters([
      'songbookName'
    ])
  },
  methods: {
    setDrawer (value) {
      this.drawerOpen = value
    }
  }
}
</script>
