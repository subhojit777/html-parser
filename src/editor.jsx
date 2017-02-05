import React, { Component } from 'react'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.onUserInput(this.textInput.value)
  }

  render() {
    return (
      <textarea
        value={ this.props.markup }
        ref={ input => this.textInput = input }
        onChange={ this.handleChange }
      ></textarea>
    )
  }
}

export default Editor
