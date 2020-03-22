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
        <v-card>
          <v-card-title>{{ this.value.artist }}</v-card-title>
          <v-card-subtitle>{{ this.value.title }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>Share via ...</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SheetHeader from '@/components/sheets/SheetHeader.vue'

export default {
  name: 'ShareSheet',
  components: { SheetHeader },
  props: ['value']
}
</script>
