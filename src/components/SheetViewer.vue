<template>
    <div :class="[$style.sheet, $style[getChordSizeClass()]]" v-html="sheet.html" />
</template>

<style module>
.sheet span {
  /* font-weight: bold;
  position: relative;
  padding-bottom: 16px;
  width: 0; */
  display: inline-block;
  position: relative;
  width: 0;
  font-weight: bold;
  overflow: visible;
  font-size: 1.0em;
  bottom: 16px;
}

.cs50 span {
  font-size: 0.5em;
}

.cs60 span {
  font-size: 0.6em;
}

.cs70 span {
  font-size: 0.7em;
}

.cs80 span {
  font-size: 0.8em;
}

.cs90 span {
  font-size: 0.9em;
}

.cs100 span {
  font-size: 1.0em;
}

.cs110 span {
  font-size: 1.1em;
}

.cs120 span {
  font-size: 1.2em;
}

.cs130 span {
  font-size: 1.3em;
}

.cs140 span {
  font-size: 1.4em;
}

.cs150 span {
  font-size: 1.5em;
}
/*
 * // CONTINUE here: https://vue-loader.vuejs.org/guide/css-modules.html
 *              ref: https://vuejs.org/v2/api/#v-html
 */
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SheetViewer',
  props: ['sheet'],
  computed: {
    ...mapGetters([
      'sheetChordSize'
    ])
  },
  methods: {
    getChordSizeClass () {
      if (this.sheetChordSize) {
        return 'cs' + this.sheetChordSize
      }
      return 'cs100'
    }
  }
}
</script>
