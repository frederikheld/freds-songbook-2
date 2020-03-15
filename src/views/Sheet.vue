<template>
    <v-container>
        <router-view />
        <v-bottom-navigation
          app
          grow
          dark
        >
          <v-btn :to="'/sheets/' + this.$route.params.id + '/play'">
            <span>Play</span>
            <v-icon>mdi-guitar-acoustic</v-icon>
          </v-btn>
          <v-btn :to="'/sheets/' + this.$route.params.id + '/edit'">
            <span>Edit</span>
            <v-icon>mdi-file-edit</v-icon>
          </v-btn>
          <v-btn :to="'/sheets/' + this.$route.params.id + '/share'">
            <span>Share</span>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-bottom-navigation>
    </v-container>
</template>
