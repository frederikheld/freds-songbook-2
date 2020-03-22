<template>
  <v-app>

    <!-- <MainNavigationDrawer @drawerStateChanged="setMainMenu" v-model="mainMenuOpen" /> -->
    <MainMenuDropdown @dropdownStateChanged="setMainMenu" v-model="mainMenuOpen" />

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
      >
        <v-icon
          v-if="['Home', 'Sheets'].includes($route.name)"
          @click.stop="mainMenuOpen = !mainMenuOpen"
        >mdi-menu</v-icon>

        <v-btn
          v-else
          icon
          to="/sheets"
          exact
        >
          <!-- <v-icon>mdi-book-open-page-variant</v-icon> -->
          <v-icon>mdi-arrow-left</v-icon>
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
// import MainNavigationDrawer from '@/components/MainNavigationDrawer.vue'
import MainMenuDropdown from '@/components/MainMenuDropdown.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  // components: { MainNavigationDrawer },
  components: { MainMenuDropdown },
  data: () => ({
    mainMenuOpen: false
  }),
  computed: {
    ...mapGetters([
      'songbookName'
    ])
  },
  methods: {
    setMainMenu (value) {
      this.mainMenuOpen = value
    }
  }
}
</script>
