import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { calculate } from "./feature/cart/cartSlice";

function App() {
  const { total, cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [cart]);

  return (
    <div>
      <Nav />
      <Cards />
      <div className="container">
        <p className="total-price">Total Price:{total}</p>
      </div>
    </div>
  );
}

export default App;
