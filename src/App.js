import './App.css';
import React, { Component } from 'react';
import Item from './Item/Item';

class App extends Component {
  state = {
    items: [{ id: 'IT-01', name: 'Smart Plug', price: 15 }],
  };

  render() {
    let items = (
      <div>
        {this.state.items.map((item) => {
          return <Item name={item.name} price={item.price}></Item>;
        })}
      </div>
    );
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Ayyy Jeeerayyyyy.</p>
          {items}
        </header>
      </div>
    );
  }
}

export default App;
