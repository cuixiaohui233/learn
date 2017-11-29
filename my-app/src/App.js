import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './shop_css/css.css';
import CommodityList from './component/commodity_list/commodity_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommodityList />
      </div>
    );
  }
}

export default App;
