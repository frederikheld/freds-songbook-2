module.exports = class SheetParser {
  extractSheetMeta (sheet) {
    const regex = {
      isHyperlink: /http(s?):\/\//,
      /**
       * regex.isHyperlink checks, if a string starts with http:// or https://
       */
      domain: /https?:\/\/(.*?\.)?(.+?\..+?)([/?#].*)?$/,
      /**
       * regex.domain matches foo.bar in:
       *    https://foo.bar
       *    http://foo.bar
       *    http://www.foo.bar
       *    http://www.foo.bar#anchor
       *    http://www.foo.bar?dings=bums#anchor
       *    http://www.foo.bar/uiui/?dings=bums#anchor
       *    https://www.foo.bar/uiui/?dings=bums#anchor
       *    https://de.foo.bar/uiui/?dings=bums#anchor
       *    http://foo.bar#anchor
       *    http://foo.bar?dings=bums
       *    http://foo.bar/de?dings&bums=2
       *
       * domain does not match:
       *    foo.bar
       *    //foo.bar
       *    ftp://foo.bar
       */
      fullDomain: /https?:\/\/(www\.)?(.+?\..+?)([/?#].*)?$/
      /**
       * regex.fullDomain matches the full domain excluding http://,
       * including TLD, but not www. with the second capture group:
       *    https://foo.bar --> foo.bar
       *    http://baz.foo.bar --> baz.foo.bar
       *    http://foo.bar  --> foo.bar
       *    http://www.foo.bar  --> foo.bar
       *    http://www.baz.foo.bar  --> baz.foo.bar
       *    http://www.foo.bar#anchor foo.bar
       *    http://www.foo.bar?dings=bums#anchor --> foo.bar
       *    http://www.foo.bar/uiui/?dings=bums#anchor --> foo.bar
       *    https://www.foo.bar/uiui/?dings=bums#anchor --> foo.bar
       *
       * domain does not match:
       *    foo.bar
       *    //foo.bar
       *    ftp://foo.bar
       */
    }
    const result = {}

    const titleMatch = sheet.match(/\{\{title:(.*?)\}\}/)
    if (titleMatch) {
      result.title = titleMatch[1]
    } else {
      result.title = '<title undefined>'
    }

    const artistMatch = sheet.match(/\{\{artist:(.*?)\}\}/)
    if (artistMatch) {
      result.artist = artistMatch[1]
    } else {
      result.artist = '<artist undefined>'
    }

    const originalArtistMatch = sheet.match(/\{\{original_artist:(.*?)\}\}/)
    if (originalArtistMatch) {
      result.original_artist = {
        text: originalArtistMatch[1]
      }
    }

    const albumMatch = sheet.match(/\{\{album:(.*?)\}\}/)
    if (albumMatch) {
      result.album = {
        text: albumMatch[1]
      }
    }

    const yearMatch = sheet.match(/\{\{year:(.*?)\}\}/)
    if (yearMatch) {
      result.year = {
        text: yearMatch[1]
      }
    }

    const knownFromMatch = sheet.match(/\{\{known_from(\|(.*?))?:(.*?)\}\}/)
    if (knownFromMatch) {
      result.known_from = {
        text: knownFromMatch[3],
        modifier: knownFromMatch[2]
      }
    }

    const sourceMatch = sheet.match(/\{\{source:(.*?)\}\}/)
    if (sourceMatch) {
      result.source = {
        text: sourceMatch[1]
      }
    }

    const infoMatch = sheet.match(/\{\{info:(.*?)\}\}/)
    if (infoMatch) {
      result.info = {
        text: infoMatch[3],
        modifier: infoMatch[2]
      }

      if (infoMatch[3].search(regex.isHyperlink) >= 0) {
        result.info.type = 'hyperlink'
        result.info.hyperlink = infoMatch[3]
        result.info.text = infoMatch[3].match(regex.fullDomain)[2]
      }
    }

    const listenMatch = sheet.match(/\{\{listen:(.*?)\}\}/)
    if (listenMatch) {
      result.listen = {
        text: listenMatch[3],
        modifier: listenMatch[2]
      }

      if (listenMatch[3].search(regex.isHyperlink) >= 0) {
        result.listen.type = 'hyperlink'
        result.listen.hyperlink = listenMatch[3]
        result.listen.text = listenMatch[3].match(regex.fullDomain)[2]
      }
    }

    const capoMatch = sheet.match(/\{\{capo:(.*?)\}\}/)
    if (capoMatch) {
      result.capo = {
        text: capoMatch[1]
      }
    }

    return result
  }
}

/**
  { name: 'artist', occurence: 'exactlyOnce' },
  { name: 'original_artist', occurence: 'exactlyOnce' },
  { name: 'title', occurence: 'exactlyOnce' },
  { name: 'album', occurence: 'maxOnce' },
  { name: 'year', occurence: 'maxOnce' },
  { name: 'known_from', modifier: ['other', 'movie', 'show', 'play', 'musical', 'audioplay'] },
  { name: 'source', type: 'link' },
  { name: 'info', type: 'link' },
  { name: 'listen', type: 'link' },
  { name: 'capo' }
*/
