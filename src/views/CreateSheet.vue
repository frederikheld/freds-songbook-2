<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create new sheet</h1>
        <v-form>
          <v-textarea ref="sheet" :value="sheet" />
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
        >Save</v-btn>
        <SheetTemplateInfoDialog style="float: right;" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script>
import SheetTemplateInfoDialog from '../components/SheetTeamplateInfoDialog.vue'

export default {
  name: 'CreateSheet',
  components: { SheetTemplateInfoDialog },
  data () {
    return {
      sheet: `{{artist:My Artist}}
{{title:My Title}}`,
      templateTags: {
        artist: '{{artist:##}}',
        title: '{{title:##}}',
        verse: '{{verse:}}',
        chorus: '{{chorus:}}',
        bridge: '{{bridge:}}'
      }
    }
  },
  methods: {
    addTemplateTag (tag) {
      this.sheet += '\n' + tag
    }
  }
}
</script>
