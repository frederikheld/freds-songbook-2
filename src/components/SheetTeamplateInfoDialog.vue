<template>
<div>
  <v-btn
    color="secondary"
    @click="dialogIsOpen=true"
  >Template Info</v-btn>
  <v-dialog
  width="80%"
  v-model="dialogIsOpen"
>
    <v-card>
    <v-card-title>How to make a Sheet</v-card-title>
    <v-card-subtitle>A quick Introduction</v-card-subtitle>

    <v-card-text>
      <p>A sheet is just a txt file with some special formatting.</p>
      <p>A song with chords can easily be set by placing the chords in square brackets right before the character it shall appear above:</p>

      <pre style="overflow-x: scroll;">[Bm]On a dark desert highway, [F#]cool wind in my hair
[A]warm smell of colitas [E]rising up through the air.</pre>

      <p>Please use international notation!<p>

      <pre style="overflow-x: scroll;">C C# D D# E F F# G G# A Bb B
Cm C#m Dm D#m Fm F#m Gm G#m Am Bbm Bm
Am7 G/C Fmaj7 ...</pre>

      <p>To specify, which kind of text is coming up, you can use the following blockstart tags:<p>

      <pre style="overflow-x: scroll;"><div v-pre>{{intro#:}}
{{verse#:}}
{{chorus#:}}
{{bridge#:}}
{{outro#:}}</div></pre>

      <p>Please replace the # sign by a running number for each block type!</p>

      <p>The block has always to start right below the blockstart tag and ends with an empty line</p>

      <p>A full block would look like this:</p>

      <pre style="overflow-x: scroll;"><div v-pre>{{verse1:}}
[Bm]On a dark desert highway, [F#]cool wind in my hair
[A]warm smell of colitas [E]rising up through the air.</div></pre>

      <p>You can also use blockmarker tags to repeat a block without having to type it again.</p>

      <pre style="overflow-x: scroll;"><div v-pre>{{chorus1:}}
[G]Welcome to the Hotel Cali[D]fornia
Such a [em]lovely place, such a [Bm]lovely face.

{{verse1:}}
[Bm]On a dark desert highway, [F#]cool wind in my hair
[A]warm smell of colitas [E]rising up through the air.

{{chorus1}}</div></pre>

      <p>The songbook will automatically insert the text of the chorus1 block at the second marker. Please note, that the blockmarker tags don't have colon!</p>

      <p>To add some more information to your sheet, you can use the following meta tags:</p>

      <pre style="overflow-x: scroll;"><div v-pre>{{title:?}}
{{artist:?}}
{{original_artist:?}}
{{year:?}}
{{from:?}}
{{source:?}}
{{capo:?}}</div></pre>

      <p>Please replace the ? sign by the respective information. You don't have to use all meta tags, but artist and title are mandatory!</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer/>
      <v-btn
        color="secondary"
        @click="dialogIsOpen=false"
      >Close</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SheetTemplateInfoDialog',
  data () {
    return {
      dialogIsOpen: false
    }
  }
}
</script>
