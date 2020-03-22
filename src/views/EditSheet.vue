<template>
  <v-container
    class="pb-0"
  >
    <v-row>
      <v-col>
        <SheetHeader
            :sheet="this.value"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="px-0 pb-0"
      >
        <SheetEditor
          v-model="this.value"
          @update-sheet="updateSheet"
          id="edit-sheet"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SheetHeader from '@/components/sheets/SheetHeader.vue'
import SheetEditor from '@/components/SheetEditor.vue'

export default {
  name: 'EditSheet',
  components: { SheetHeader, SheetEditor },
  props: ['value'],
  methods: {
    updateSheet (sheet) {
      this.$emit('update-sheet', sheet)
    }
  }
}
</script>
