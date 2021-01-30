import React, { Component } from 'react';

const item = (props) => {
  return (
    <div>
      <label>Item Name</label> <input type='text' value={props.name} />
    </div>
  );
};

export default item;
