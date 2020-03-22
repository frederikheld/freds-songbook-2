<template>
  <v-container>
    <h1 class="title">Create new Sheet</h1>
    <v-form @submit.prevent>
      <v-col>
        <v-row>
          <v-text-field
            v-model="title"
            label="Title"
            autofocus
          />
        </v-row>
        <v-row>
          <v-text-field
            v-model="artist"
            label="Artist"
          />
        </v-row>
        <v-row>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="onCancel"
            class="mr-3"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
            @click="onSubmit"
          >
            Create
          </v-btn>
        </v-row>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'CreateSheet',
  data () {
    return {
      artist: undefined,
      title: undefined
    }
  },
  methods: {
    onSubmit () {
      // if (!this.isFormValid()) { return } // do validation stuff here
      this.storeNewSheet(this.sheet)
    },
    onCancel () {
      this.$router.push('/sheets')
    },
    async storeNewSheet (newSheet) {
      let code = '{{title:' + this.title + '}}\n'
      code += '{{artist:' + this.artist + '}}'
      const newId = await this.$store.dispatch('saveSheet', { code: code })
      this.$router.push('/sheets/' + newId + '/edit')
    }
  }
}
</script>
