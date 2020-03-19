<template>
    <div>
        <v-container>
            <h1 class="title">{{ value.title }}</h1>
            <h2 class="subtitle-1">{{ value.artist }}<span style="float: right;">{{ value.id }}</span></h2>
        </v-container>
        <div class="pa-3" id="view-sheet">
            <pre>{{ value.code }}</pre>
        </div>
    </div>
</template>

<style scoped>
#view-sheet {
    overflow: auto;
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
