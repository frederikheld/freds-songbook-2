<template>
    <pre>{{ this.sheet.code }}</pre>
</template>

<script>
export default {
  name: 'SheetViewer',
  props: ['sheet']
}
</script>
