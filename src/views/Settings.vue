<template>
  <v-container>
    <v-form
      @submit.prevent
    >
      <v-text-field
        label="Who's songbook is this?"
        placeholder="Fred's"
        v-model="localSongbookName"
        ref="inputSongbookName" />
      <v-btn
        type="submit"
        color="primary"
        absolute
        bottom
        right
        @click="saveSettings"
      >Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data () {
    return {
      localSongbookName: undefined
    }
  },
  computed: {
    ...mapGetters([
      'songbookName'
    ])
  },
  mounted () {
    this.localSongbookName = this.songbookName
  },
  methods: {
    saveSettings () {
      this.$store.commit('SAVE_SONGBOOK_NAME', this.localSongbookName)
      this.localSongbookName = this.songbookName
    }
  }
}
</script>
