<template>
  <v-expansion-panels
    flat
  >
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-card
          flat
        >
          <v-card-title>{{ sheet.title }}</v-card-title>
          <v-card-subtitle>{{ sheet.artist }}<span style="float: right;">{{ sheet.id }}</span></v-card-subtitle>
        </v-card>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container class="body-2 font-weight-regular">
          <v-row v-for="(field, field_id) in sheet" :key="field_id">
            <v-col
              class="py-0"
              v-if="field.text"
              style="max-width: 200px; width: 30%;"
            >
              <span>{{ metaCaptions[field_id].text }}</span>
              <span v-if="field.modifier"> {{ metaCaptions[field_id].modifiers[field.modifier] }}</span>
              <span>:</span>
            </v-col>
            <v-col class="py-0">
              <span v-if="field.type === 'hyperlink'">
                <a :href="field.hyperlink" target="_blank">{{ field.text }}</a>
              </span>
              <span v-else>{{ field.text }}</span>
            </v-col>
          </v-row>
        </v-container>
        <!-- <pre>{{ metaCaptions }}</pre> -->
        <!-- <pre>{{ Object.keys(sheet) }}</pre>
        <pre>{{ sheet }}</pre> -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
em {
  font-style: normal;
  font-weight: bold;
}

.v-expansion-panel-header {
  padding: 0;
}

.v-expansion-panel-header__icon {
  /* vertical-align: top; */
  /* margin-right: 24px !important; */
}

.v-expansion-panel-header div {
  padding-right: 0;
  padding-left: 0;
}

>>>.v-expansion-panel-content__wrap {
  padding: 0;
}

.container {
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
}

.col {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

<script>
export default {
  name: 'SheetHeader',
  props: ['sheet'],
  data () {
    return {
      metaCaptions: {
        id: 'ID',
        artist: {
          text: 'Artist'
        },
        title: {
          text: 'Title'
        },
        album: {
          text: 'Album'
        },
        year: {
          text: 'Year'
        },
        known_from: {
          text: 'Known from',
          modifiers: {
            movie: 'movie',
            musical: 'musical'
          }
        },
        source: {
          text: 'Source'
        },
        listen: {
          text: 'Listen',
          modifiers: {
            youtube: 'Youtube',
            spotify: 'Spotify'
          }
        },
        info: {
          text: 'Info',
          modifiers: {
            wikipedia_de: 'Wikipedia (de)',
            wikipedia_en: 'Wikipedia (en)'
          }
        },
        code: 'Code'
      }
    }
  }
}
</script>
