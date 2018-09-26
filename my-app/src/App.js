import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state is available in Class based components only, and not in function based components
  // props is used to get value from outside components(Parent component or wrapping to a Child or embedded component) 
  // and state is used to get values from inside the component
  state = {
    persons: [
      {name:'Jane', age: 26},
      {name: 'John', age: 27},
      {name: 'Jim', age: 29}
    ]
  }
  switchNameHandler = () => {
    //console.log('Clicked');
    this.setState({
      persons: [
        {name:'Johnny', age: 26},
        {name: 'John', age: 27},
        {name: 'Jim', age: 31}
      ]
    })
  }
  render() {
    // In JSX of this component, we cant have siblings of div, since its preferred to have one root element (div, in this case) per component.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> We will start our app here</h1>
        {/* <Person name='John' age='22'/>
        <Person name='Jane' age='21'> My Hobbies: Gaming </Person>
        <Person name='Jim' age='23'/> */}

        {/* Here this refers to the class 'App' */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Gaming </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <button onClick={this.switchNameHandler}> Switch Names </button>
      </div>
    );

 

    // Below is another way to render. The above commented JSX code, compiles into the below format ultimately
    // For each nested html element, we need to make a new call to React.createElement everytime. 
    // This takes 3 arguments (type, [props],[...children]). The type argument can be either a tag name string (such as 'div' or 'span') or 
    // a React component type (a class or a function), or a React fragment type.

    //return React.createElement('div', {className:'App'}, React.createElement('h1', {className:'App-title'}, 'I\'ll start our React App here'));
  }
}

export default App;
