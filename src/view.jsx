import React, { Component } from 'react'
import HtmlParser from 'htmlparser2'
import DomUtils from 'domutils'
import * as helper from './helper'

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

  render() {
    let domHandler = this.parseHtml()

    if (domHandler.error) {
      return (
        <div id="view">Error occurred</div>
      )
    }
    else {
      if (domHandler.dom.length) {
        return (
          <div id="view">
            { helper.filterEmptyElements(domHandler.dom).map((o, i) => {
              // Return HTML tags as React component.
              // Return text elements as it is.
              if (o.name) {
                return <o.name { ...helper.convertToReactAttributes(o.attribs) } key={ i } />
              }
              else {
                return o.data
              }
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
