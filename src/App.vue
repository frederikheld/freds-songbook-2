<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      left
    >
      <v-list>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/sheets"
        >
          <v-list-item-action>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Sheets</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list>
          <v-list-item
            link
            to="/settings"
          >
            <v-list-item-action>
              <v-icon>mdi-hammer-wrench</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            to="/about"
          >
            <v-list-item-action>
              <v-icon>mdi-information</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
      >
        <v-icon
          v-if="['Home', 'Sheets', 'Settings', 'About'].includes($route.name)"
          @click.stop="drawer = !drawer"
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
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters([
      'songbookName'
    ])
  }
}
</script>
