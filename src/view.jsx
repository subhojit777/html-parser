import React, { Component } from 'react'
import HtmlParser from 'htmlparser2'
import DomUtils from 'domutils'

class View extends Component {
  constructor(props) {
    super(props)

    this.parseHtml = this.parseHtml.bind(this)
  }

  componentDidMount() {
    this.view = document.getElementById('view')
  }

  // @TODO write test
  parseHtml() {
    let domHandler = new HtmlParser.DomHandler({
      normalizeWhitespace: true
    })
    let parser = new HtmlParser.Parser(domHandler)
    parser.write(this.props.markup)
    parser.done()

    return domHandler
  }

  // @TODO write test
  // Make sure the attributes are in React format.
  getReactAttributes(attribs) {
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

  render() {
    let domHandler = this.parseHtml()

    if (domHandler.error) {
      return (
        <div id="view">Error occurred</div>
      )
    }
    else {
      let dom = domHandler.dom[0]

      if (domHandler.dom.length) {
        return (
          <div id="view">
            { DomUtils.getElementsByTagName('input', domHandler.dom, true).map((o, i) => {
              return <o.name { ...this.getReactAttributes(o.attribs) } key={ i } />
            }) }
          </div>
        )
      }
      else {
        return (
          <div id="view"></div>
        )
      }
    }
  }
}

export default View
