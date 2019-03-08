import React, { Component } from 'react';
import './App.css';
import Table from './Components/tableComponent/Table';
import AttFooter from './Components/attFooterComponent/AttFooter';
import AttHeader from './Components/attHeaderComponent/AttHeader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AttHeader/>
        <Table/>
        <AttFooter/>
      </div>
    );
  }
}

export default App;
