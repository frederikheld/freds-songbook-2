<template>
    <v-container>
        <h1 class="title">{{ sheet(this.$route.params.id).title }}</h1>
        <h2 class="subtitle-1">{{ sheet(this.$route.params.id).artist }}<span style="float: right;">{{ sheet(this.$route.params.id).id }}</span></h2>
        <div class="sheet mt-4">
            <pre>{{ sheet(this.$route.params.id).code }}</pre>
        </div>
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
  name: 'ViewSheet',
  computed: {
    ...mapGetters([
      'sheet'
    ])
  }
}
</script>
