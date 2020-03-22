module.exports = class SheetUtils {
  extractSheetMeta (sheet) {
    return {
      artist: sheet.match(/\{\{artist:(.*?)\}\}/)[1] || '<artist>',
      title: sheet.match(/\{\{title:(.*?)\}\}/)[1] || '<title>'
    }
  }
}
