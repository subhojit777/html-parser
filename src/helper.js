import HtmlParser from 'htmlparser2'
import DomUtils from 'domutils'
import convert from 'react-attr-converter'
import styleMap from './map.json'

// Make sure the attributes are in React format.
export function convertToReactAttributes(attribs) {
  let attributeKeys = Object.keys(attribs)

  for (let key of attributeKeys) {
    // React expects style attribute as object.
    if (key == 'style') {
      // @TODO Maybe we can move this to a function.
      let objStyles = attribs[key].replace(/\s+/, '').split(';').reduce((a, c) => {
        let v = c.split(':').map(o => o.trim())
        a[convertToReactStyle(v[0])] = v[1]
        return a
      }, {})

      attribs[key] = objStyles
    }
    else {
      // Make sure attributes are in React format.
      let originalAttributes = attribs[key]
      delete attribs[key]
      attribs[convert(key)] = originalAttributes
    }
  }

  return attribs
}

// Converts style attribute to React format.
// @TODO Publish a module for this?
export function convertToReactStyle(style) {
  let val = styleMap[style.toLowerCase()]
  return val ? val : style
}

// Filters out empty text elements.
// @TODO Maybe we can contribute this to domutils?
export function filterEmptyElements(elements) {
  return elements.filter(e => {
    if (!(e.data && e.data.trim() === '')) {
      return true
    }
  })
}

// Parses HTML markup.
export function parseHtml(markup) {
  let domHandler = new HtmlParser.DomHandler({
    normalizeWhitespace: true
  })
  let parser = new HtmlParser.Parser(domHandler)

  parser.write(markup)
  parser.done()

  return domHandler
}
