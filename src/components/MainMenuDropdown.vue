<template>
    <v-menu
      v-model="dropdownOpen"
    >

      <template>
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

    </v-menu>
</template>

<script>
export default {
  name: 'MainMenuDropdown',
  props: ['value'],
  computed: {
    dropdownOpen: {
      get () {
        return this.$props.value
      },
      set (dropdownOpen) {
        this.$emit('dropdownStateChanged', dropdownOpen)
      }
    }
  }
}
</script>
