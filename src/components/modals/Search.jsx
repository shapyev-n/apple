import React, { useState } from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";
import searchImg from "../../images/search.png";

const Search = () => {
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
          <div className="search">
            <img src={searchImg} alt="" />
            <input type="search" name="" id="" placeholder="Search apple.com" />
          </div>
          <div className="mainLinks">
            <div className="nav_s">
              <p>Quick Links</p>
              <Link to={"/"}>Certified Refurbished</Link>
              <Link to={"/"}>Education</Link>
              <Link to={"/"}>Business</Link>
              <Link to={"/"}>Veterans and Military</Link>
              <Link to={"/"}>Government</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
