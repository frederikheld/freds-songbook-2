import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import _ from 'lodash'
import SheetParser from '../lib/SheetParser'

const sheetParser = new SheetParser()

const vuexLocal = new VuexPersistence({
  key: 'freds-songbook',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    sheetsMeta: [
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
    sheetsCode: {
      0: `{{artist:Rise Against}}
{{title:Hero of War}}
{{year:2008}}
{{album:Appeal to Reason}}
{{listen:https://www.youtube.com/watch?v=_DboMAghWcA}}
{{info|en:https://en.wikipedia.org/wiki/Hero_of_War}}
{{source:https://tabs.ultimate-guitar.com/r/rise_against/hero_of_war_ver4_crd.htm}}

{{intro|tabs:}}
e|---0---0---0---0-------2/4-2-0----|
B|-----0---0---0-----4-----------4--|
G|------------------4---------------|
D|-----------------4----------------|
A|-0--------------------------------|
E|----------------------------------| He said...

{{verse1:}}
"[E]Son, have you seen the [G#m]world?
Well, what would you [A]say if I said that you [E]could?
Just carry this [A]gun, you'll even get [E]paid."
I said, "That sounds pretty [B]good."
Black leather [E]boots spit-shined so [G#m]bright
They cut off my [A]hair but it looked [E]alright.
We marched and we [A]sang, we all became [E]friends
As we learned how to [B]fight.

{{chorus1:}}
A hero of [C#m]war yeah that's what I'll [A]be
And when I come [E]home they'll be damn proud fo [B]me.
I'll carry this [C#m]flag to the grave if I [A]must
Because it's the flag that I [E]love and a flag that I [B]trust.

{{verse2:}}
I kicked in the [E]door, I yelled my com[G#m]mands
The children, they [A]cried, but I got my [E]man.
We toook him [A]away a bag over his [E]face
From his family and his [B]friends.
They took off his [E]clothes, they pissed in his [G#m]hands
I told them to [A]stop, but then I joined [E]in.
We beat him with [A]guns and batons not just [E]once
But again and [B]again.

{{chorus1}}

{{verse3:}}
She [E]walked through bullets and [G#m]haze
I asked her to [A]stop, I begged her to [E]stay
But she pressed [A]on, so I lifted my [E]gun
and I fired [B]away.
The [E]shells jumped thorugh the [G#m]smoke
And into the [A]sand that the blood now had [E]soaked.
She col[A]lapsed with a flag in her [E]hand
A flag white as [B]snow.

{{chorus2:}}
A hero of [C#m]war, is that what the [A]see
Just medals and [E]scars, so damn proud of [B]me.
And I brought home that [C#m]flag, now it gathers [A]dust
But it's a flag that I [E]love, it's the only flag I [B]trust.

{{outro:}}
He said, "[E]Son, have you seen the [B]world?
Well, what would you [A]say if I said that you [E]could?"`,
      1: `{{title:Die Nacht ist nicht allein zum Schlafen da}}
{{artist:Gustaf Gründgens}}
{{known_from|movie:Tanz auf dem Vulkan (1938)}}
{{source:Liederbock}}
{{listen:https://www.youtube.com/watch?v=XqzX-uZUtI4}}
{{info|de:https://de.wikipedia.org/wiki/Die_Nacht_ist_nicht_allein_zum_Schlafen_da}}

{{verse1:}}
[Em]Wenn die Bürger [B7]schlafen gehn in [Am]ihren Zipfel[Em]mützen
[Am]und zu ihrem [Em]Herrgott flehn, [B7]dass er sie beschütze.
[Em]zieh'n wir festilch [B7]angetan [Am]hin zu den Ta[Em]vernen.
[Am]Schlendrian, [Em]Schlendrian [B7]unter den Laternen!

{{chorus:}}
Eine [A]Nacht ist [B7]nicht allein zum [E]Schlafen da, eine [A]Nacht ist [B7]da, dass was ge[E]schieht.
Ein [A]Schiff ist [B7]nicht nur für den [E]Hafen da, es muss hi[B7]naus, hinaus of hohe See.
Be[Em]rauscht euch, Brüder singt und [Am]trinkt und [Em]lacht! Genießt den [Am]schönsten Auchen[B7]blick!
Eine [A]Nacht, die [B7]man in einem [E]Rausch verbracht, bedeutet [A]Seelig[B7]keit und [E]Glück, bedeutet [A]Seelig[B7]keit und [E]Glück.

{{verse2:}}
[Em]Wenn im Glase [B7]perlt der Sekt [Am]unter roten [Em]Ampeln,
[Am]und die Weiber, [Em]süß erschreckt, [B7]auf dem Schoß uns trampeln,
[Em]küssen wir die [B7]Prüderie [Am]von den roten [Em]Mündern,
[Am]Amnestie, [Em]Amnestie [B7]allen armen Sündern!

{{chorus}}

{{verse3:}}
[Em]Wenn die Morgen[B7]dämmerung [Am]hinter Fenster[Em]scheiben
[Am]und die Männer [Em]ohne Braut [B7]beieinander bleiben,
[Em]schmieden wir im [B7]Flüsterton [Am]aus Gesprächen [Em]Bomben.
[Am]Rebellion, [Em]Rebellion [B7]in den Katakomben!

{{chorus}}

{{verse4:}}
[Em][B7][Am][Em]
[Am][Em][B7]
[Em][B7][Am][Em]
[Am][Em][B7]

{{verse5:}}
[Em][B7][Am][Em]
[Am][Em][B7]
[Em][B7][Am][Em]
[Am][Em][B7]`,
      2: `{{title:Hotel California}}
{{artist:The Eagles}}
{{year:1976}}
{{album:Hotel California}}
{{info|de:https://de.wikipedia.org/wiki/Hotel_California}}

{{verse1:}}
[Bm]On a dark desert highway, [F#]cool wind in my hair
[A]warm smell of colitas [E]rising up through the air.
[G]Up ahead in the distance [D]I saw a shimmering light
[em]My head grew heavy and my sight grew dim,
[F#]I had to stop for the night.

{{verse2:}}
There she stood in the doorway, I heard the mission bell
and I was thinking to myself "this could be heaven or this could be hell."
Then she lit up a candle, and she showed me the way.
There were voices down the corridor,
I thought I heard them say:

{{chorus1:}}
[G]Welcome to the Hotel Cali[D]fornia
Such a [em]lovely place, such a [Bm]lovely face.
[G]Plenty of room at the Hotel Cali[D]fornia
[em]any time of year [F#]you can find it here.

{{verse3:}}
Her mind is Tiffany-twisted, she got the Mercedes Benz,
she got a lot of pretty, pretty boys, that she calls friends.
How they dance in the courtyard, sweet summer sweat,
some dance to remember,
some dance to forget.

{{verse4:}}
So I called up the Captain: "Please bring me my wine."
He said: "We haven't had that spirit here since nineteen sixty nine."
And still those voices are calling from far away,
wake you up in the middle of the night
just to hear them say:

{{chorus1}}

{{verse5:}}
Mirrors on the ceiling, the pink champagne on ice,
and she said: "Wer are all just prisoners here, of our own device."
And in the master's chambers, they gathered for the feast,
they stab it with their steely knives,
but they just can't kill the beast.

{{verse6:}}
Last thing I remember, I was running for the door,
I had to find the passage back to the place I was before.
"Relax", said the night man, "we are programmed to receive.
You can check out any time you like,
but you can never leave."`,
      3: `{{title:Bang Bang}}
{{artist:Nancy Sinatra}}`,
      4: `{{title:Land Down Under}}
{{artist:Men at Work}}`
    },
    sheetsHtml: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: ''
    },
    songbookName: 'Fred\'s'
  },
  getters: {
    sheets: function (state) {
      return state.sheetsMeta
    },
    sheet: function (state, id) {
      return function (id) {
        const result = { ...state.sheetsMeta[id] }
        result.code = state.sheetsCode[id]
        result.html = state.sheetsHtml[id]
        return result
      }
    },
    songbookName: function (state) {
      return state.songbookName
    }
  },
  actions: {
    saveSheet (context, sheet) {
      // separate code from meta:
      const newSheetCode = sheet.code
      const newSheetMeta = sheetParser.extractSheetMeta(sheet.code)
      const newSheetHtml = sheetParser.renderHTML(sheet.code)
      console.log('newSheetHtml:', newSheetHtml)

      if (sheet.id !== undefined) {
        // use existing id:
        newSheetMeta.id = sheet.id

        // update sheetsMeta object that has repsective id:
        this.commit('UPDATE_SHEET_META', newSheetMeta)
      } else {
        // find next id in the line:
        if (context.state.sheetsMeta.length > 0) {
          const maxKey = _.maxBy(context.state.sheetsMeta, function (obj) { return obj.id }).id
          newSheetMeta.id = maxKey + 1
        } else {
          newSheetMeta.id = 0
        }

        // create a new sheet meta object with the given id:
        context.commit('CREATE_SHEET_META', newSheetMeta)
      }

      // update sheetsCode object that has respective id:
      this.commit('SAVE_SHEET_CODE', {
        code: newSheetCode,
        id: newSheetMeta.id
      })

      // update sheetHtml object that has respective id:
      this.commit('SAVE_SHEET_HTML', {
        html: newSheetHtml,
        id: newSheetMeta.id
      })

      return newSheetMeta.id
    }
  },
  mutations: {
    CREATE_SHEET_META (state, newSheetMeta) {
      state.sheetsMeta.push(newSheetMeta)
    },
    UPDATE_SHEET_META (state, newSheetMeta) {
      state.sheetsMeta = state.sheetsMeta.map((obj) => {
        if (obj.id === newSheetMeta.id) {
          return { ...obj, ...newSheetMeta }
        } else {
          return obj
        }
      })
    },
    SAVE_SHEET_CODE (state, newSheet) {
      state.sheetsCode[newSheet.id] = newSheet.code
    },
    SAVE_SHEET_HTML (state, newSheet) {
      state.sheetsHtml[newSheet.id] = newSheet.html
    },
    SAVE_SONGBOOK_NAME (state, name) {
      let fixedName

      // wrongfully ends with an apostrophe:
      if (name.endsWith('\'')) {
        name = name.slice(0, -1)
      }

      // already ends with 's --> take name as is
      if (name.endsWith('\'s')) {
        fixedName = name

      // doesn't already end with 's --> add it
      } else {
        fixedName = name + '\'s'
      }

      state.songbookName = fixedName
    }
  },
  modules: {
  }
})
