import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h1> We will start our app here</h1>
    //   </div>
    // );

    // In JSX of this component, we cant have siblings of div, since its preferred to have one root element (div, in this case) per component.

    // Below is another way to render. The above commented JSX code, compiles into the below format ultimately
    // For each nested html element, we need to make a new call to React.createElement everytime. 
    // This takes 3 arguments (type, [props],[...children]). The type argument can be either a tag name string (such as 'div' or 'span') or 
    // a React component type (a class or a function), or a React fragment type.

    return React.createElement('div', {className:'App'}, React.createElement('h1', {className:'App-title'}, 'I\'ll start our React App here'));
  }
}

export default App;
