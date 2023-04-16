import React from "react";
import "./Nav.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  // const { amount } = useGlobalContext();
  const { amount } = useSelector((store) => store.cart);
  const [login, setLogin] = useState(false);
  const loginToggle = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  return (
    <>
      <div className="nav">
        <h1>UseReducer</h1>
        <div>
          <p>
            <i className="uil uil-shopping-basket"></i>
            <sup>{amount}</sup>
          </p>
          <button onClick={() => loginToggle()}>
            <Link to="/" className="link">
              Login
            </Link>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
