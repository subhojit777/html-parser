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
      let dom = domHandler.dom[0]

      if (domHandler.dom.length) {
        return (
          <div id="view">
            { DomUtils.getElementsByTagName('input', domHandler.dom, true).map((o, i) => {
              return <o.name { ...helper.getReactAttributes(o.attribs) } key={ i } />
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
