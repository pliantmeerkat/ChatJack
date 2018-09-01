const React = require('react');
const ReactDOM = require('react-dom');

import SessionRunner from './SessionRunner'

class App extends React.Component {

  render() {
    return (
      <SessionRunner />
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
