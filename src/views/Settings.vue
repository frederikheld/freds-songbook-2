<template>
  <v-container>
    <v-form
      @submit.prevent
    >
    <v-row>
      <v-col>
        <h1 class="title">Settings</h1>
        <h2 class="subtitle-1">General</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <v-text-field
            label="Who's songbook is this?"
            placeholder="Fred's"
            v-model="localSongbookName"
            ref="inputSongbookName"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="subtitle-1">Sheets</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader class="px-0">Chord Size</v-subheader>
          <v-slider
            thumb-size="always"
            v-model="localSheetChordSize"
            ticks="always"
            step="10"
            tick-size="5"
            :min="50"
            :max="150"
            :tick-labels="tickLabels"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col class="col-auto">
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
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data () {
    return {
      localSongbookName: undefined,
      localSheetChordSize: undefined,
      // tickLabels: ['50 %', '60 %', '70 %', '80 %', '90 %', '100 %', '110 %', '120 %', '130 %', '140 %', '150 %']
      // tickLabels: ['', '60 %', '', '80 %', '', '100 %', '', '120 %', '', '140 %', '']
      tickLabels: ['50 %', '', '70 %', '', '90 %', '', '110 %', '', '130 %', '', '150 %']
    }
  },
  computed: {
    ...mapGetters([
      'songbookName',
      'sheetChordSize'
    ])
  },
  mounted () {
    this.localSongbookName = this.songbookName
    this.localSheetChordSize = this.sheetChordSize
  },
  methods: {
    saveSettings () {
      this.$store.commit('SAVE_SONGBOOK_NAME', this.localSongbookName)
      this.$store.commit('SAVE_SHEET_CHORDSIZE', this.localSheetChordSize)
      this.localSongbookName = this.songbookName
    },
    onCancel () {
      this.$router.push('/sheets')
    }
  }
}
</script>
