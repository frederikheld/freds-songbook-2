<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create new sheet</h1>
        <v-form>
          <v-textarea class="sheet" ref="sheet" v-model="sheet.code" />
        </v-form>
        <span class="mr-1">add:</span>
        <a
          class="addTemplateTag mr-1"
          v-for="(tag, tag_id) in templateTags"
          :key="tag_id"
          @click="addTemplateTag(tag)"
        >
          {{ tag }}
        </a>
      </v-col>
    </v-row>
    <div style="width: 100%; height: 12px;"><!-- spacing between textbox and buttons --></div>
    <v-row style="position: absolute; bottom: 12px; right: 0; margin-right: 12px;">
      <v-col class="text-right" style="padding: 0; padding-top: 12px;">
        <v-btn
          color="primary"
          type="sumbmit"
          class="ml-4"
          style="float: right;"
          @click="onSubmit"
        >Save</v-btn>
        <SheetTemplateInfoDialog style="float: right;" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* .sheet textarea {
  white-space: pre-wrap;
} */
</style>

<script>
import SheetTemplateInfoDialog from '../components/SheetTeamplateInfoDialog.vue'
// import { mapGetters } from 'vuex'

// import firebase from 'firebase/app'
// import 'firebase/firestore'

export default {
  name: 'CreateSheet',
  components: { SheetTemplateInfoDialog },
  data () {
    return {
      sheet: {
        code: '{{artist:My Artist}}\n{{title:My Title}}'
      },
      templateTags: {
        artist: '{{artist:##}}',
        title: '{{title:##}}',
        verse: '{{verse:}}',
        chorus: '{{chorus:}}',
        bridge: '{{bridge:}}'
      }
    }
  },
  mounted () {
    // this.$refs.sheet.$el.querySelector('textarea').setAttribute('wrap', 'hard')
  },
  computed: {
  },
  methods: {
    addTemplateTag (tag) {
      const firstHalf = this.sheet.code.substr(0, this.$refs.sheet.$el.querySelector('textarea').selectionStart)
      const secondHalf = this.sheet.code.substr(this.$refs.sheet.$el.querySelector('textarea').selectionEnd)
      this.sheet.code = firstHalf + tag + secondHalf

      this.$nextTick(function () {
        // set cursors at the end of the newly inserted text:
        this.$refs.sheet.$el.querySelector('textarea').focus()
        this.$refs.sheet.$el.querySelector('textarea').setSelectionRange((firstHalf + tag).length, (firstHalf + tag).length)
      })
    },
    onSubmit () {
      // if (!this.isFormValid()) { return } // do validation stuff here
      this.storeNewSheet(this.sheet)
    },
    async storeNewSheet (newSheet) {
      this.$store.commit('saveSheet', newSheet)
      // this.$
      // const docRef = await firebase.firestore()
      //   .collection('/meetings')
      //   .add(newSheet)
      // await docRef.update({
      //   timestampAdded: firebase.firestore.FieldValue.serverTimestamp(),
      //   timestampUpdated: firebase.firestore.FieldValue.serverTimestamp()
      // })
    }
  }
}
</script>
