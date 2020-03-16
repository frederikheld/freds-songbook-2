<template>
    <v-container>
        <v-content class="sheet">
            <pre>{{ sheet(this.$route.params.id) }}</pre>
        </v-content>
    </v-container>
</template>

<style scoped>
.sheet {
    overflow-x: scroll;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PlaySheet',
  computed: {
    ...mapGetters([
      'sheet'
    ])
  }
}
</script>
