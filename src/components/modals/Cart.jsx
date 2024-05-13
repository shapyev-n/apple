import React, { useState } from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      id="modalsBar"
      onMouseLeave={handleMouseLeave}
      style={{ display: isHovered ? "block" : "none" }}
    >
      <div className="container">
        <div className="modalsBar">
          <div className="cart">
            <h1>Your Bag is empty</h1>
            <div className="txt">
              <p>
                <Link to={"/"}>Sign in</Link>
                to see if you have any saved items
              </p>
            </div>
          </div>
          <div className="mainLinks">
            <div className="nav_c">
              <p>My Profile</p>
              <span className="orders">
                <Link to={"/"}>Orders</Link>
              </span>
              <span className="saves">
                <Link to={"/"}>Your Saves</Link>
              </span>
              <span className="account">
                <Link to={"/"}>Account</Link>
              </span>
              <span className="signIn">
                <Link to={"/"}>Sign in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
