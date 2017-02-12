import React, { Component } from 'react'
import HtmlParser from 'htmlparser2'

class View extends Component {
  constructor(props) {
    super(props)

    this.parseHtml = this.parseHtml.bind(this)
  }

  componentDidMount() {
    this.view = document.getElementById('view')
  }

  parseHtml() {
    let handler = new HtmlParser.DomHandler({
      normalizeWhitespace: true
    })

    let parser = new HtmlParser.Parser(handler)
    parser.write(this.props.markup)
    parser.done()

    return handler
  }

  render() {
    let parsedHtml = this.parseHtml()

    if (parsedHtml.error) {
      return (
        <div id="view">Error occurred</div>
      )
    }
    else {
      // @TODO User parsedHtml.dom to render the elements.
      return (
        <div id="view">Render parsed HTML here</div>
      )
    }
  }
}

export default View
