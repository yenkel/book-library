import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass ({
    render() {
        return (
            <div>
               <h1>Hi</h1>
            </div>
        );
    }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
