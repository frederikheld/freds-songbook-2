<template>
    <div>
    <v-container>
        <h1 class="title">{{ value.title }}</h1>
        <h2 class="subtitle-1">{{ value.artist }}<span style="float: right;">{{ value.id }}</span></h2>
    </v-container>
    <SheetEditor
      v-model="this.value"
      @update-sheet="updateSheet"
      id="edit-sheet"
    />
    </div>
</template>

<script>
import SheetEditor from '@/components/SheetEditor.vue'

export default {
  name: 'EditSheet',
  components: { SheetEditor },
  props: ['value'],
  methods: {
    updateSheet (sheet) {
      this.$emit('update-sheet', sheet)
    }
  }
}
</script>
