var React = require('react');
var ReactDOM = require('react-dom');
var Editor = require('./editor');
var View = require('./view');

var mountNode = document.getElementById('htmlparser');

class Main extends React.Component {
  render() {
    <div>
      <Editor />
      <View />
    </div>
  }
}

ReactDOM.render(<Main />, mountNode);
