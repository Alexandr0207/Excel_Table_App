import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Components/Table/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table x={16} y={25} id={'1'} />
      </div>
    );
  }
}

export default App;
