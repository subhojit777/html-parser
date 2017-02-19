import convert from 'react-attr-converter'
import styleMap from './map.json'

// Make sure the attributes are in React format.
// @TODO update test
export function convertToReactAttributes(attribs) {
  let attributeKeys = Object.keys(attribs)

  for (let key of attributeKeys) {
    // React expects style attribute as object.
    if (key == 'style') {
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
// @TODO write test
// @TODO Publish a module for this?
function convertToReactStyle(style) {
  let val = styleMap[style.toLowerCase()]
  return val ? val : style
}

// Filters out empty text elements.
// @TODO write test
export function filterEmptyElements(elements) {
  return elements.filter(e => {
    if (!(e.data && e.data.trim() === '')) {
      return true
    }
  })
}
