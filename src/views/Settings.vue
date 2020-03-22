<template>
  <v-container>
    <h1 class="title">Settings</h1>
    <v-form
      @submit.prevent
    >
      <v-col>
        <v-row>
          <v-text-field
            label="Who's songbook is this?"
            placeholder="Fred's"
            v-model="localSongbookName"
            ref="inputSongbookName"
          />
        </v-row>
        <v-row>
          <v-spacer/>
          <v-btn
            color="secondary"
            @click="onCancel"
            class="mr-3"
            text
          bottom
          right
          >
            Cancel
          </v-btn>
          <v-btn
            type="submit"
            color="primary"
            @click="saveSettings"
          bottom
          right
          >Save</v-btn>
        </v-row>
      </v-col>
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
    },
    onCancel () {
      this.$router.push('/sheets')
    }
  }
}
</script>
