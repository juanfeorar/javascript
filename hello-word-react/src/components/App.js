//Dependencies
import React, { Component } from 'react';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Code JOBS" items={items} />
        <Content hola= "hello" />
        <Footer copyright="&copy;  Code jobs 2019" />
      </div>
    );
  }
}

export default App;
