import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './view.jsx'
import Editor from './editor.jsx'

let mountNode = document.getElementById('htmlparser')

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markup: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(markup) {
    this.setState({
      markup: markup
    })
  }

  render() {
    return (
      <div>
        <Editor
          markup={ this.state.markup }
          onUserInput={ this.handleUserInput }
        />
        <View
          markup={ this.state.markup }
        />
      </div>
    )
  }
}

ReactDOM.render(<Main />, mountNode)
