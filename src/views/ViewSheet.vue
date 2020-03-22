<template>
  <v-container>
    <v-row>
      <v-col>
        <SheetHeader
          :sheet="this.value"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SheetViewer
          :sheet="this.value"
          class="mx-0"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#view-sheet {
    overflow: auto;
}
</style>

<script>
import SheetHeader from '@/components/sheets/SheetHeader.vue'
import SheetViewer from '@/components/SheetViewer.vue'

export default {
  name: 'ViewSheet',
  components: { SheetHeader, SheetViewer },
  props: ['value']
}
</script>
