import React, { Component } from 'react'
import HtmlParser from 'htmlparser2'

class View extends Component {
  constructor(props) {
    super(props)

    this.parseHtml = this.parseHtml.bind(this)
  }

  parseHtml() {
    let handler = new HtmlParser.DomHandler((err, dom) => {
      if (err)
        // @TODO change this.
        console.log(err)
      else
        // Use this to create the view.
        console.log(dom)
    })

    let parser = new HtmlParser.Parser(handler)
    parser.write(this.props.markup)
    parser.done()
  }

  render() {
    return (
      <div>{ this.parseHtml() }</div>
    )
  }
}

export default View
