<template>
    <div id="sheet-editor-container">
        <SheetEditor v-model="this.value" @updateSheet="updateSheet" id="sheet-editor" />
    </div>
</template>

<style scoped></style>

<script>
import SheetEditor from '@/components/SheetEditor.vue'

export default {
  name: 'EditSheet',
  components: { SheetEditor },
  props: ['value'],
  methods: {
    updateSheet (sheet) {
      this.$emit('updateSheet', sheet)
    }
  }
}
</script>
