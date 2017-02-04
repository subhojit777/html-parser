var React = require('react');
var ReactDOM = require('react-dom');
var View = require('./view.jsx');
var Editor = require('./editor.jsx');

var mountNode = document.getElementById('htmlparser');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Editor />
        <View />
      </div>
    );
  }
}

ReactDOM.render(<Main />, mountNode);
