// import React, { useState } from 'react';
import { useState } from 'react';
import '../css/card.css';
// import { useState } from 'react';

const Card  = (props) => {

  const [overlay,setOverlayState]=useState(false)

  const getCardClass=()=>
  {
    // console.log('Working propery');
    return overlay===true?"card card-selected":"card card-not-selected";
  }

  const getOverlayState=()=>
  {
    // console.log('Working propery');
    return overlay===true?"card-counter":"card-counter-disable";
  }

  // function onIncrement()
  // {
  //     alert('Increment working');
  // }

  // function onDecrement()
  // {
  //   alert("Decrement working");
  // }

  const toggleOverlay=()=>
  {
    // console.log('Working propery');
    setOverlayState(!overlay);
  }

  return (
    <>
        <div className={getCardClass()} onClick={toggleOverlay}>
                <div className='card-content'>
                  {/* <h2>{props.pid}</h2> */}
                    <h2>{props.pdetail.pname}</h2>
                    <p>{props.pdetail.pdesc}</p>
                </div>
                <div className={getOverlayState()}>
                      <h4>Quantity</h4> &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="counter-container">
                        <span
                        className={(props.pdetail.quantity)===0?"btn zero-btn":"btn unzero-btn"}>
                          {props.pdetail.quantity === 0?"Zero":props.pdetail.quantity}</span>
                      </div>
                      <div className="button-container">
                        <button className="btn btn-plus" onClick={props.onIncrement}>+</button>
                        <button className="btn btn-minus" onClick={props.onDecrement}>-</button>
                      </div>
                </div>
        </div>
    </>
  )
}

export default Card;
