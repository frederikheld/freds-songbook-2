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
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null
  })
}
</script>
