import './App.css';
import React, { Component } from 'react';
import Item from './Item/Item';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    items: [{ id: 'IT-01', name: 'Smart Plug', price: 15, quantity: 100 },
  { id: 'IT-01', name: 'LED lights ', price: 15, quantity: 23 },
{ id: 'IT-01', name: 'Nanga Murgha', price: 4.99, quantity: 24 }],
  };

  render() {
    let items = (
      <div>
        {this.state.items.map((item) => {
          return <Item name={item.name} price={item.price}  quantity={item.quantity}></Item>;
        })}
      </div>
    );
    return (
      <div className='App'>
        <header className='App-header'>
          <p>ITEM COST CALCULATOR.</p>
          <div className="row">
            <div className="col-6">
              Item
            </div>
            <div className="col-3">
              Price
            </div>
            <div className="col-3">
              Qty
            </div>
          </div>
              {items}
        </header>
      </div>
    );
  }
}

export default App;
