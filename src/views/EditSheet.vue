<template>
    <div id="sheet-editor-container">
        <SheetEditor :sheet="this.$props.sheet" id="sheet-editor" />
    </div>
</template>

<style scoped></style>

<script>
import SheetEditor from '@/components/SheetEditor.vue'

export default {
  name: 'EditSheet',
  components: { SheetEditor },
  props: {
    sheet: {
      type: Object,
      required: true
    }
  }
}
</script>
