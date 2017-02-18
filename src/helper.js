// @TODO write test
// Make sure the attributes are in React format.
export function getReactAttributes(attribs) {
  let attributeKeys = Object.keys(attribs)

  for (let key of attributeKeys) {
    // React expects style attribute as object.
    if (key == 'style') {
      let objStyles = attribs[key].replace(/\s+/, '').split(';').reduce((a, c) => {
        let v = c.split(':').map(o => o.trim())
        a[v[0]] = v[1]
        return a
      }, {})

      attribs[key] = objStyles
    }
  }

  return attribs
}
