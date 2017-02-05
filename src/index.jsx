import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './view.jsx'
import Editor from './editor.jsx'

let mountNode = document.getElementById('htmlparser')

class Main extends Component {
  render() {
    return (
      <div>
        <Editor />
        <View />
      </div>
    )
  }
}

ReactDOM.render(<Main />, mountNode)
