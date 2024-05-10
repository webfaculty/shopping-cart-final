import "./css/app.css";
import Cart from "./components/Cart";
import Card from "./components/Card";
import { useState } from "react";

function App() {

  // const products=

  const [products,selectProduct] =useState([
    {
      pid:1,
      pname:"Strawberry Shake",
      pdesc:"Finest Strawberries, Milk, Sugar",
      price:169,
      quantity:0
    },
    {
      pid:2,
      pname:"Chocolate Fantasy",
      pdesc:"Brownie with chocolate sauce topped with Vanilla Ice cream",
      price:269,
      quantity:0
    },
    {
      pid:3,
      pname:"Mediterranean Delight",
      pdesc:"Nuts and Dates from the soils of Algeria",
      price:369,
      quantity:0
    },
    
  ]);

  const onQuantityIncrease=(prod,e)=>
  {
    e.stopPropagation();
    let selectedProducts=[...products];
    let selProdIndex=selectedProducts.indexOf(prod);
    let selProdQuantity=selectedProducts[selProdIndex].quantity;
    let selProdQuantityInc=selectedProducts[selProdIndex].quantity++;
    selectProduct(selectedProducts);

    if(selProdQuantity>=10)
    {
      selectedProducts[selProdIndex].quantity=10;
    }

    // console.log("Prod Index : "+selProdIndex);
    console.log("Prod Inc Value : "+selProdQuantityInc);
  }

  const onQuantityDecrease=(prod,e)=>
  {
    e.stopPropagation();
    let selectedProducts=[...products];
    let selProdIndex=selectedProducts.indexOf(prod);
    let selProdQuantity=selectedProducts[selProdIndex].quantity;
    let selProdQuantityDec=selectedProducts[selProdIndex].quantity--;

    // let selProdQuantityDec <= 0?0:0;

    if(selProdQuantity <= 0)
    {
      selectedProducts[selProdIndex].quantity=0;
    }

    selectProduct(selectedProducts);




    // console.log("Prod Index : "+selProdIndex);
    console.log("Prod Dec Value: "+selProdQuantityDec);
    // console.log("Prod Inc Value : "+selProdQuantityInc);

    // console.log('Quanitity Decrement Working');
  }


  return (
    <>
      <div className="container">
        <header>
          <Cart products={products}/>
        </header>
        <main>
          <div className="positioning-container">
            {
              products.map(prod=>(
                <Card pid={prod.pid} pdetail={prod} 
                onIncrement={(e)=>onQuantityIncrease(prod,e)} 
                onDecrement={(e)=>onQuantityDecrease(prod,e)}/>
              ))
            }
          </div>
        </main>
      </div>
    </>
  );

  
}

export default App;
