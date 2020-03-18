<template>
  <div>
    <v-form>
      <v-textarea
        class="sheet"
        ref="sheet"
        v-model="sheetCode"
        autofocus
        auto-grow
        full-width
        hide-details
        no-resize
        solo
      />
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
  props: ['value'],
  computed: {
    sheetCode: {
      get () {
        return this.$props.value.code
      },
      set (sheetCode) {
        console.log('set sheet in SheetEditor.vue')
        const newSheet = this.$props.value
        console.log('newSheet:', newSheet)
        newSheet.code = sheetCode
        console.log('newSheet.code updated:', newSheet)
        this.$emit('updateSheet', newSheet)
      }
    }
  }
}
</script>
