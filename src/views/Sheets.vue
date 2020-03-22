<template>
  <v-container
    fill-height
    class="pa-0"
  >
    <v-container
      v-if="sheets.length > 0"
      style="top: 0; position: absolute;"
    >
      <v-row>
        <v-col>
          <v-text-field
            label="Start typing to search song sheet"
            v-model="searchQuery"
          />
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col>
          <v-row
            v-if="filteredSheets.length > 0"
          >
            <v-list
              style="width: 100%;"
            >
              <v-list-item
                v-for="sheet in filteredSheets"
                :key="sheet.id"
                :to="'/sheets/' + sheet.id"
                style="padding-left: 12px; padding-right: 12px;"
              >
                <v-list-item-content two-line>
                  <v-list-item-title>{{ sheet.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ sheet.artist }}<div style="float: right;">{{ sheet.id }}</div></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
          <v-row
            v-else
          >
            <v-col

              justify="center"
              align="center"
              style="text-align: center;"
            >
              <p>:-(</p>
              <p class="grey--text text--darken-1">No songs match your search criteria!</p>
              <p class="grey--text text--darken-1">You can search by title, artist or ID.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-else
    >
      <v-row>
        <v-col
          justify="center"
          class="text-center text-middle"
        >
            <p>Your songbook is empty.</p>
            <p>Create your first sheet by tapping the <v-icon>mdi-plus</v-icon> button!</p>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      fixed
      dark
      fab
      top
      right
      color="pink"
      style="z-index: 5; margin-top: 12px;"
      to="/sheets/create"
      title="Create new Sheet"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sheets',
  data: () => ({
    searchQuery: null
  }),
  computed: {
    ...mapGetters([
      'sheets'
    ]),
    filteredSheets: function () {
      const self = this

      if (!self.searchQuery) {
        return self.sheets
      }

      return self.sheets.filter(function (sheet) {
        return (
          sheet.title.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1 ||
          sheet.artist.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1 ||
          sheet.id === parseInt(self.searchQuery)
        )
      })
    }
  }
}
</script>
