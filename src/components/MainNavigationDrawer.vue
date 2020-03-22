<template>
    <v-navigation-drawer
      v-model="drawerOpen"
      app
      left
      clipped
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
</template>

<script>
export default {
  name: 'MainNavigationDrawer',
  props: ['value'],
  computed: {
    drawerOpen: {
      get () {
        return this.$props.value
      },
      set (drawerOpen) {
        this.$emit('drawerStateChanged', drawerOpen)
      }
    }
  }
}
</script>
