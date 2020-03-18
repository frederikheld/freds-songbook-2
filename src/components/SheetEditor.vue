<template>
  <div>
    <v-form>
      <v-textarea
        class="sheet"
        ref="sheet"
        v-model="sheet.code"
        autofocus
        auto-grow
        full-width
        hide-details
        no-resize
        solo
      />

      <v-btn
        fab
        top
        right
        fixed
        dark
        color="pink"
        type="sumbmit"
        style="z-index:100; margin-top: 12px;"
        @click="onSubmit"
        title="Save Changes"
      >
        <!-- <v-icon>mdi-content-save</v-icon> -->
        <v-icon>mdi-download</v-icon>
    </v-btn>
    </v-form>
  </div>
</template>

<style scoped>
.sheet textarea {
    padding: 12px;
    background: #f00 !important;
}
</style>

<script>
export default {
  name: 'SheetEditor',
  props: {
    sheet: {
      type: Object,
      required: true
    }
  }
}
</script>
