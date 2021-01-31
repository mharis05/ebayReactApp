import React, { useState } from 'react';
import './ItemDetails.css';

const ItemDetails = (props) => {
  const [items, setItems] = useState({
    items: [
      { id: 'IT-01', name: 'Smart Plug', price: 15, quantity: 100, total: 0 },
      {
        id: 'IT-02',
        name: 'Not Smart Plug',
        price: 25,
        quantity: 100,
        total: 0,
      },
    ],
  });

  const quantityChangedHandler = (e, price, index) => {
    const totalValue = e.target.value * price;
    const item = { ...items.items[index] };
    item.total = totalValue;
    const newItems = [...items.items];
    newItems[index] = item;

    setItems({
      items: newItems,
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(items.items[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return items.items.map((item, index) => {
      const { id, name, price, total } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <input
              type='text'
              onChange={(e) => quantityChangedHandler(e, price, index)}
            ></input>
          </td>
          <td>{total}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 id='title'>Items List</h1>
      <table id='items'>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default ItemDetails;
