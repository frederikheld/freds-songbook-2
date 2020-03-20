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
    <TemplateTagPicker
      @tagSelected="insertTemplateTag"
      bottom
      right
      fixed
      style="margin-bottom: 54px;"
      color="primary"
    />
  </div>
</template>

<style scoped>
/* .sheet textarea { } */
</style>

<script>
import TemplateTagPicker from '@/components/TemplateTagPicker.vue'

export default {
  name: 'SheetEditor',
  props: ['value'],
  components: { TemplateTagPicker },
  computed: {
    sheetCode: {
      get () {
        return this.$props.value.code
      },
      set (sheetCode) {
        const newSheet = this.$props.value
        newSheet.code = sheetCode
        this.$emit('updateSheet', newSheet)
      }
    }
  },
  methods: {
    insertTemplateTag (tag) {
      const firstHalf = this.sheetCode.substr(0, this.$refs.sheet.$el.querySelector('textarea').selectionStart)
      const secondHalf = this.sheetCode.substr(this.$refs.sheet.$el.querySelector('textarea').selectionEnd)
      this.sheetCode = firstHalf + tag + secondHalf

      this.$nextTick(function () {
        // set cursors at the end of the newly inserted text:
        this.$refs.sheet.$el.querySelector('textarea').focus()
        this.$refs.sheet.$el.querySelector('textarea').setSelectionRange((firstHalf + tag).length, (firstHalf + tag).length)
      })
    }
  }
}
</script>
