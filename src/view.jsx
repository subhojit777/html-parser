import React, { Component } from 'react'

class View extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{ this.props.markup }</div>
    )
  }
}

export default View
