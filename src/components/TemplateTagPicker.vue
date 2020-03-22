<template>
    <!-- <v-btn
        fab
        :bottom="this.bottom"
        :top="this.top"
        :right="this.right"
        :left="this.left"
        :fixed="this.fixed"
        :color="this.color"
        style="z-index: 5;"
        @click="tagSelected"
    >
        { }
    </v-btn> -->

    <v-card
      style="position: fixed; right: 12px; bottom: 12px; max-width: 90%;"
      @click="function () { states.tagSelectorOpen = true }"
      v-click-outside="closeTagSelector"
      :ripple="false"
    >
      <v-navigation-drawer
        permanent
        hide-overlay
        stateless
        color="green"
        :mini-variant="!states.tagSelectorOpen"
      >
        <v-list
          id="tag-picker"
          dense
        >
            <!-- <v-list-item link>
                <v-list-item-icon><v-icon>mdi-help-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-title>help</v-list-item-title>
            </v-list-item> -->

            <v-list-group
              prepend-icon="mdi-code-braces"
              v-model="states.metaSelectorOpen"
              active-class="grey--text text--darken-4"
            >
                <template v-slot:activator>
                    <v-list-item-title>meta</v-list-item-title>
                </template>

                <v-list>
                    <v-list-item
                      class="meta-picker"
                    >
                        <v-btn
                            text
                            small
                            rounded
                            class="ma-1"
                            v-for="(metaTag, metaTag_id) in metaTags"
                            :key="metaTag_id"
                            @click="selectMeta(metaTag.name)"
                        ><span>{{ '{{' + metaTag.name + '\}\}' }}</span></v-btn>
                    </v-list-item>
                </v-list>
            </v-list-group>

            <v-list-group
              prepend-icon="mdi-code-braces"
              v-model="states.blocksSelectorOpen"
              :retain-focus-on-click="retainFocusOnClick"
              active-class="grey--text text--darken-4"
            >
                <template v-slot:activator>
                    <v-list-item-title>blocks</v-list-item-title>
                </template>

                <v-list>
                    <v-list-item
                      class="blocks-picker"
                    >
                        <v-btn
                            text
                            small
                            rounded
                            class="ma-1"
                            v-for="(block_name, block_id) in blocks"
                            :key="block_id"
                            @click="selectBlock(block_name)"
                        ><span>{{ '{{' + block_name + '\}\}' }}</span></v-btn>
                    </v-list-item>
                </v-list>
            </v-list-group>

            <v-list-group
              prepend-icon="mdi-code-brackets"
              v-model="states.chordSelectorOpen"
              :retain-focus-on-click="retainFocusOnClick"
              active-class="grey--text text--darken-4"
            >
                <template v-slot:activator>
                    <v-list-item-title>chords</v-list-item-title>
                </template>

                <div
                    class="chords-picker"
                >
                    <div
                        style="margin-left: 30px;"
                    >
                        <v-btn
                            text
                            small
                            rounded
                            class="ma-1"
                            v-for="(chord, chord_id) in chords.major.sharp"
                            :key="chord_id"
                            :disabled="(chord === undefined)"
                            @click="selectChord(chord)"
                        ><span v-if="(chord !== undefined)">[{{ chord }}]</span></v-btn>
                    </div>
                    <div>
                        <v-btn
                            text
                            small
                            rounded
                            class="ma-1"
                            v-for="(chord, chord_id) in chords.major.basic"
                            :key="chord_id"
                            :disabled="(chord == undefined)"
                            @click="selectChord(chord)"
                        ><span v-if="(chord !== undefined)">[{{ chord }}]</span></v-btn>
                    </div>
                    <div
                        style="margin-left: -28px;"
                    >
                        <v-btn
                            text
                            small
                            rounded
                            class="ma-1"
                            v-for="(chord, chord_id) in chords.major.flat"
                            :key="chord_id"
                            :disabled="(chord == undefined)"
                            @click="selectChord(chord)"
                        ><span v-if="(chord !== undefined)">[{{ chord }}]</span></v-btn>
                    </div>
                </div>

            </v-list-group>

        </v-list>
      </v-navigation-drawer>
  </v-card>
    <!-- <v-speed-dial
      v-model="fab"
      :top="this.top"
      :bottom="this.bottom"
      :right="this.right"
      :left="this.left"
      :fixed="this.fixed"
      :absolute="this.absolute"
      :transition="this.transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-clipboard-arrow-down-outline</v-icon>
        </v-btn>
      </template>

      <v-speed-dial
        v-model="fabBraces"
      >
        <template v-slot:activator>
            <v-btn
            v-model="fabBraces"
            color="blue darken-2"
            dark
            fab
            >
            <v-icon v-if="fabBraces">mdi-close</v-icon>
            <v-icon v-else>mdi-code-braces</v-icon>
            </v-btn>
        </template>
        <v-btn
            fab
            dark
            small
        >artist</v-btn>
        <v-btn
            fab
            dark
            small
        >title</v-btn>
      </v-speed-dial>

      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-code-braces</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-code-brackets</v-icon>
      </v-btn>
    </v-speed-dial> -->

</template>

<style scoped>
.meta-picker {
    padding: 6px;
    overflow-x: auto;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.4);
}

.blocks-picker {
    padding: 6px;
    overflow-x: auto;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.4);
}

.chords-picker {
    padding: 6px;
    overflow-x: auto;
    height: 140px;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.4);
}

#tag-picker .v-btn {
    text-transform: none !important;
    font-family:'Courier New', Courier, monospace
}
</style>

<script>
export default {
  name: 'TemplateTagPicker',
  data () {
    return {
      fab: false,
      fabBraces: false,
      templateTagsDrawer: false,
      codeBraces: false,
      chords: {
        major: {
          basic: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
          sharp: ['C#', 'D#', undefined, 'F#', 'G#', 'A#', undefined],
          flat: [undefined, 'Db', 'Eb', undefined, 'Gb', 'Ab', 'Bb']
        },
        minor: {
          basic: ['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'],
          sharp: ['C#m', 'D#m', undefined, 'F#m', 'G#m', 'A#m', undefined],
          flat: [undefined, 'Dbm', 'Ebm', undefined, 'Gbm', 'Abm', 'Bbm']
        }
      },
      /**
       * Meta tags should be put to the top of the file.
       * They have different characteristics which are defined
       * in their respective object below.
       * Modifiers are optional and default to the first value in the array.
       */
      metaTags: [
        { name: 'artist', occurence: 'exactlyOnce' },
        { name: 'original_artist', occurence: 'exactlyOnce' },
        { name: 'title', occurence: 'exactlyOnce' },
        { name: 'album', occurence: 'maxOnce' },
        { name: 'year', occurence: 'maxOnce' },
        { name: 'known_from', modifier: ['other', 'movie', 'show', 'play', 'musical', 'audioplay'] },
        { name: 'source', type: 'link' },
        { name: 'info', modifier: ['other', 'wikipedia'], type: 'link' },
        { name: 'listen', modifier: ['other', 'youtube', 'spotify'], type: 'link' },
        { name: 'capo' }
      ],
      /**
       * A block can be defined and re-used.
       * All blocks have the same characteristics.
       *
       * A block definition looks like this:
       *
       *    {{name|modifier#:}}
       *
       *      name: one of the blocks list below
       *          |modifier: chords, tabs (optional. chords is default if not given)
       *                   #: consecutive number
       *
       * To re-use the block, you use the block definition
       * but without the colon:
       *
       *    {{name|modifier#}}
       *
       */
      blocks: ['intro', 'verse', 'refrain', 'bridge'],
      states: {
        metaSelectorOpen: false,
        blocksSelectorOpen: false,
        tagSelectorOpen: false,
        chordSelectorOpen: false
      }
    }
  },
  props: {
    bottom: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    transition: {
      type: String
    },
    'retain-focus-on-click': {
      type: Boolean
    }
  },
  computed: {
    retainFocusOnClicK () {
      return this.$props['retain-focus-on-click']
    }
  },
  methods: {
    selectTag (tag, selectionStart = 0, selectionEnd = 0) {
      this.closeTagSelector()
      this.$emit('tag-selected', {
        text: tag,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      })
    },
    selectMeta (meta) {
      this.states.metaSelectorOpen = false
      this.selectTag('{{' + meta + ':??}}', -4, -2)
    },
    selectBlock (block) {
      this.states.blockSelectorOpen = false
      this.selectTag('{{' + block + ':}}')
    },
    selectChord (chord) {
      this.states.chordSelectorOpen = false
      this.selectTag('[' + chord + ']')
    },
    closeTagSelector () {
      this.states.metaSelectorOpen = false
      this.states.blocksSelectorOpen = false
      this.states.chordSelectorOpen = false
      this.states.tagSelectorOpen = false
    }
  },
  directives: {
    'click-outside': {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          // here I check that click was outside the el and his childrens
          if (!(el === event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  }
}
</script>
