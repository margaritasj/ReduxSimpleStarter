import React, { Component } from 'react';

// Components
import Header from './components/Header';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
      </div>
    );
  }
}

export default App;