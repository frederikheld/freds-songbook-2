<template>
    <v-container>
        <v-card>
            <v-card-title>{{ this.$props.sheet.artist }}</v-card-title>
            <v-card-subtitle>{{ this.$props.sheet.title }}</v-card-subtitle>
        </v-card>
        <v-row>
            <v-col>
                <div>Share via ...</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'ShareSheet',
  props: {
    sheet: {
      type: Object,
      required: true
    }
  }
}
</script>
