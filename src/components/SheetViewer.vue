<template>
    <div class="sheet" v-html="sheet.html" />
</template>

<style scoped>
.sheet .chord {
  font-weight: bold;
}
/*
 * // CONTINUE here: https://vue-loader.vuejs.org/guide/css-modules.html
 *              ref: https://vuejs.org/v2/api/#v-html
 */
</style>

<script>
export default {
  name: 'SheetViewer',
  props: ['sheet']
}
</script>
