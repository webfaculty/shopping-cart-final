import React from 'react';
import '../css/card.css';
const card = (props) => {
  return (
    <>
        <div className='card'>
                <div className='card-content'>
                    <h2>{props.productName}</h2>
                    <p>{props.productDesc}</p>
                </div>
                <div className='card-counter'>
                      <h4>Quantity</h4> &nbsp;&nbsp;&nbsp;&nbsp;
                      <button className="btn zero-btn">Zero</button>
                      <button className="btn btn-plus">+</button>
                      <button className="btn btn-minus">-</button>
                </div>
        </div>
    </>
  )
}

export default card;
