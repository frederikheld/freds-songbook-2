<template>
    <v-container>
        <v-card>
            <v-card-title>{{ this.$props.value.artist }}</v-card-title>
            <v-card-subtitle>{{ this.$props.value.title }}</v-card-subtitle>
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
    value: {
      type: Object,
      default: () => {
        return {
          title: '',
          artist: '',
          code: ''
        }
      }
    }
  }
}
</script>
