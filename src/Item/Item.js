import React, { Component } from 'react';

const item = (props) => {
  return (
    <div className="row">
    	<div className="col-6">
    		{props.name}
      </div>
      <div className="col-3">
        {props.price}
      </div>
      <div className="col-3">
        {props.quantity}
      </div>
    </div>
  );
};

export default item;
