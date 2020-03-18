<template>
    <v-container>
        <h1 class="title">{{ value.title }}</h1>
        <h2 class="subtitle-1">{{ value.artist }}<span style="float: right;">{{ value.id }}</span></h2>
        <div class="sheet mt-4">
            <pre>{{ value.code }}</pre>
        </div>
    </v-container>
</template>

<style scoped>
.sheet {
    overflow-x: scroll;
}
</style>

<script>
export default {
  name: 'ViewSheet',
  props: ['value']
  // props: {
  //   value: {
  //     type: Object,
  //     default: () => {
  //       return {
  //         title: '',
  //         artist: '',
  //         code: ''
  //       }
  //     }
  //   }
  // }
}
</script>
