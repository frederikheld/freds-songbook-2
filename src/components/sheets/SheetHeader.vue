<template>
  <div>
    <h1 class="title">{{ sheet.title }}</h1>
    <h2 class="subtitle-1">{{ sheet.artist }}<span style="float: right;">{{ sheet.id }}</span></h2>
  </div>
</template>

<script>
export default {
  name: 'SheetHeader',
  props: ['sheet']
}
</script>
