<template>
  <div>
    <v-form>
      <div
        id="sheet-container"
        @click="setFocusToTextarea()"
      >
        <v-textarea
          id="sheet"
          ref="sheet"
          v-model="sheetCode"
          hide-details
          no-resize
          loading="false"
          style="float: left; width: 100%; overflow-y: hidden; padding: 12px; outline: none; font-family: Courier New, Courier, monospace;"
          :rows="getNumberOfLines(sheetCode)"
        />
      </div>
    </v-form>
    <TemplateTagPicker
      @tag-selected="insertTemplateTag"
      bottom
      right
      fixed
      id="template-tag-picker"
      color="primary"
      retain-focus-on-click
    />
  </div>
</template>

<style scoped>
#template-tag-picker {
  margin-right: 8px;
  margin-bottom: 64px;
}

#sheet-container {
  height: 100%;
  min-height: calc(100vh - 48px - 60px - 56px - 32px);
  float: left;
  width: 100%;
  overflow-y: auto;
  cursor: text;
  box-shadow: inset 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
}
</style>

<script>
import TemplateTagPicker from '@/components/TemplateTagPicker.vue'

export default {
  name: 'SheetEditor',
  props: ['value'],
  data () {
    return { }
  },
  components: { TemplateTagPicker },
  computed: {
    sheetCode: {
      get () {
        return this.$props.value.code
      },
      set (sheetCode) {
        const newSheet = this.$props.value
        newSheet.code = sheetCode
        this.$emit('update-sheet', newSheet)
      }
    }
  },
  methods: {
    insertTemplateTag (tag) {
      const firstHalf = this.sheetCode.substr(0, this.$refs.sheet.$el.querySelector('textarea').selectionStart)
      const secondHalf = this.sheetCode.substr(this.$refs.sheet.$el.querySelector('textarea').selectionEnd)
      this.sheetCode = firstHalf + tag.text + secondHalf

      this.$nextTick(function () {
        // set cursors at the end of the newly inserted text:
        this.$refs.sheet.$el.querySelector('textarea').focus()
        this.$refs.sheet.$el.querySelector('textarea').setSelectionRange((firstHalf + tag.text).length + tag.selectionStart, (firstHalf + tag.text).length + tag.selectionEnd)
      })
    },
    getNumberOfLines (text) {
      /** replacement for the 'auto-grow' property of v-textarea
       *  as this feature has issue with maintaining the scroll
       *  position of the textarea.
       *  Source: https://github.com/vuetifyjs/vuetify/issues/5314
       */
      if (text && typeof text === 'string') {
        return text.replace(/\r\n/g, '\n').split('\n').length // replace makes sure, that this works with line breaks of different OS
      }
    },
    setFocusToTextarea () {
      const textLength = this.$refs.sheet.$el.querySelector('textarea').value.length
      if (this.$refs.sheet.$el.querySelector('textarea') !== document.activeElement) {
        this.$refs.sheet.$el.querySelector('textarea').focus()
        this.$refs.sheet.$el.querySelector('textarea').setSelectionRange(textLength, textLength)
      }
    }
  }
}
</script>
