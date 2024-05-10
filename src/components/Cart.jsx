import React from "react";
import { useState } from "react";
import '../css/cart.css';

export default function Cart(props) {

  const [overlayCart,setOverlayCartState]=useState(false);

  const getCartItemClass=()=>
  {
    return overlayCart===true?"cart-item-container-show":"cart-item-container-hide";
  }

  const popup=()=>
  {
    // alert('working');
    setOverlayCartState(!overlayCart);
  }
  return (
    <>
      <div className="positioning-container">
        <button type="button" onClick={popup}>My cart</button>
        <div className={getCartItemClass()}>
          <ul>

            {
              props.products.map(item=>(

                (item.quantity)>=1?<li>{`${item.pname} x ${item.quantity}`}</li> : ""
                // <li>{`${item.pname} x ${item.quantity}`}</li>

              ))
            }



            {/* <li>Strawberry Shake</li>
            <li>Chocolate Fantasy</li>
            <li>Mediterranean Delight</li>  */}
          </ul>
        </div>
      </div>
    </>
  );
}
