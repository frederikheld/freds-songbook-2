<template>
  <v-container>
    <v-btn
      fixed
      dark
      fab
      top
      right
      color="pink"
      style="z-index:100; margin-top: 12px;"
      to="/sheets/create"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container>
      <v-text-field
        label="Start typing to search song sheet"
        v-model="searchQuery"
      >
      </v-text-field>
    </v-container>
    <v-container class="sheet-list">
      <v-list>
        <v-list-item
          v-for="sheet in filteredSheets"
          :key="sheet.id"
          :to="'/sheets/' + sheet.id"
          style="padding-left: 12px; padding-right: 12px;"
        >
          <v-list-item-content two-line>
            <v-list-item-title>{{ sheet.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ sheet.artist }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-container>
</template>

<style scoped>
.sheet-list {
  padding: 0;
}
</style>

<script>
export default {
  name: 'Sheets',
  data: () => ({
    titleLimit: 20,
    sheets: [
      {
        id: 0,
        artist: 'Rise Against',
        title: 'Hero of War'
      },
      {
        id: 1,
        artist: 'Gustav Gründgens',
        title: 'Die Nacht ist nicht allein zum Schlafen da'
      },
      {
        id: 2,
        artist: 'The Eagles',
        title: 'Hotel California'
      },
      {
        id: 3,
        artist: 'Nancy Sinatra',
        title: 'Bang Bang'
      },
      {
        id: 4,
        artist: 'Men at Work',
        title: 'Land Down Under'
      }
    ],
    searchQuery: null
  }),
  computed: {
    filteredSheets: function () {
      const self = this

      if (!self.searchQuery) {
        return self.sheets
      }

      return self.sheets.filter(function (sheet) {
        return (
          sheet.title.toLowerCase().indexOf(self.searchQuery) !== -1 ||
          sheet.artist.toLowerCase().indexOf(self.searchQuery) !== -1
        )
      })
    }
  }
}
</script>
