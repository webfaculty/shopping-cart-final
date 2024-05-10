import "./css/app.css";
import Card from "./components/card";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <Cart />
        </header>
        <main>
          <div className="positioning-container">
            <Card
              productName="Strawberry Shake"
              productDesc="Finest Strawberries, Milk, Sugar"
            />

            <Card
              productName="Chocolate Fantasy"
              productDesc="Brownie with chocolate sauce topped with Vanilla Ice cream"
            />

            <Card
              productName="Mediterranean Delight"
              productDesc="Nuts and Dates from the soils of Algeria"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
