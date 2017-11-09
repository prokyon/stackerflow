import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Components {
  constructor() {
    super();
  }

  render() {
    return(
      <h2>Hello world!</h2>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
