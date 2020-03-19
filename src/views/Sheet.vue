<template>
    <div>

      <v-btn
        v-if="pendingEdits"
        fab
        top
        right
        fixed
        dark
        color="pink"
        type="sumbmit"
        style="z-index:100; margin-top: 12px;"
        @click="onBtnSavePressed"
        title="Save Changes"
      >
        <!-- <v-icon>mdi-content-save</v-icon> -->
        <v-icon>mdi-download</v-icon>
      </v-btn>

      <router-view v-model="localSheet" @updateSheet="updateLocalSheet"/>

      <v-bottom-navigation
        app
        grow
        dark
      >
        <v-btn :to="'/sheets/' + this.$route.params.id + '/play'">
          <!-- <span>Play</span> -->
          <v-icon>mdi-guitar-acoustic</v-icon>
        </v-btn>
        <v-btn :to="'/sheets/' + this.$route.params.id + '/edit'">
          <!-- <span>Edit</span> -->
          <v-icon>mdi-file-edit</v-icon>
        </v-btn>
        <v-btn :to="'/sheets/' + this.$route.params.id + '/share'">
          <!-- <span>Share</span> -->
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      localSheet: {}
    }
  },
  computed: {
    ...mapGetters([
      'sheet'
    ]),
    sheetInStore () {
      return this.sheet(this.$route.params.id)
    },
    pendingEdits () {
      if (
        this.sheetInStore &&
        this.sheetInStore.code &&
        this.localSheet &&
        this.localSheet.code &&
        this.localSheet.code !== this.sheetInStore.code
      ) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.loadSheetFromStore()
    console.log('Sheet mounted. this.sheetsInStore:', this.sheetInStore)
  },
  methods: {
    loadSheetFromStore () {
      console.log('Sheet.vue: loading sheet from store')
      this.localSheet = this.sheetInStore
    },
    updateLocalSheet (sheet) {
      this.localSheet = { ...sheet }
    },
    onBtnSavePressed () {
      this.$store.dispatch('saveSheet', { ...this.localSheet })
      this.loadSheetFromStore()
    }
  }
}

/**
 * The sheet is passed to the router view.
 * This allows each subview view/edit/share to use the same data.
 */
</script>
