<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create new sheet</h1>
        <v-form>
          <v-textarea :value="sheetTemplate" />
        </v-form>
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
      sheetTemplate: `{{artist:My Artist}}
{{title:My Title}}`
    }
  }
}
</script>
