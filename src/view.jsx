import React, { Component } from 'react'
import * as helper from './helper'

class View extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.view = document.getElementById('view')
  }

  render() {
    let domHandler = helper.parseHtml(this.props.markup)

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
