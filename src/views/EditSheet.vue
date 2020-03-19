<template>
    <div>
    <v-container>
        <h1 class="title">{{ value.title }}</h1>
        <h2 class="subtitle-1">{{ value.artist }}<span style="float: right;">{{ value.id }}</span></h2>
    </v-container>
    <SheetEditor
      v-model="this.value"
      @updateSheet="updateSheet"
      id="edit-sheet"
    />
    </div>
</template>

<style scoped>
#edit-sheet {
  overflow: auto;
 }
</style>

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
