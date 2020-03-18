<template>
    <div>
        <router-view :sheet="sheet(this.$route.params.id)"/>
        <v-bottom-navigation
          app
          grow
          dark
        >
          <v-btn :to="'/sheets/' + this.$route.params.id + '/play'">
            <span>Play</span>
            <v-icon>mdi-guitar-acoustic</v-icon>
          </v-btn>
          <v-btn :to="'/sheets/' + this.$route.params.id + '/edit'">
            <span>Edit</span>
            <v-icon>mdi-file-edit</v-icon>
          </v-btn>
          <v-btn :to="'/sheets/' + this.$route.params.id + '/share'">
            <span>Share</span>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sheet'
    ])
  }
}

/**
 * The sheet is passed to the router view.
 * This allows each subview view/edit/share to use the same data.
 */
</script>
