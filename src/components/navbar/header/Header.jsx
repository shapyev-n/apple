import React, { useState } from "react";
import "./header.scss";
import logoImg from "../../../images/icon.png";
import cart from "../../../images/cart.png";
import search from "../../../images/search.png";
import { Link, NavLink } from "react-router-dom";
import StoreBar from "../../modals/StoreBar";
import Mac from "../../modals/Mac";
import Ipad from "../../modals/Ipad";
import Iphone from "../../modals/Iphone";
import Watch from "../../modals/Watch";
import Vision from "../../modals/Vision";
import AirPods from "../../modals/AirPods";
import TvHome from "../../modals/TvHome";
import Entertaiment from "../../modals/Entertaiment";
import Accessories from "../../modals/Accessories";
import Support from "../../modals/Support";
import Search from "../../modals/Search";
import Cart from "../../modals/Cart";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleMouseEnter11 = () => {
    setIsHovered11(true);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };
  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };
  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };
  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };
  const handleMouseEnter8 = () => {
    setIsHovered8(true);
  };
  const handleMouseEnter9 = () => {
    setIsHovered9(true);
  };
  const handleMouseEnter10 = () => {
    setIsHovered10(true);
  };

  const handleMouseLeave11 = () => {
    setIsHovered11(false);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };
  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };
  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };
  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };
  const handleMouseLeave8 = () => {
    setIsHovered8(false);
  };
  const handleMouseLeave9 = () => {
    setIsHovered9(false);
  };
  const handleMouseLeave10 = () => {
    setIsHovered10(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <NavLink to={"/"}>
            <img src={logoImg} alt="" />
          </NavLink>
          <nav>
            <span
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Link to={"/store"}>Store</Link>
            </span>
            {isHovered1 && <StoreBar />}
            <span
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link to={"/mac"}>Mac</Link>
            </span>
            {isHovered2 && <Mac />}
            <span
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Link to={"/ipad"}>iPad</Link>
            </span>
            {isHovered3 && <Ipad />}
            <span
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <Link to={"/iphone"}>iPhone</Link>
            </span>
            {isHovered4 && <Iphone />}
            <span
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <Link to={"/watch"}>Watch</Link>
            </span>
            {isHovered5 && <Watch />}
            <span
              onMouseEnter={handleMouseEnter6}
              onMouseLeave={handleMouseLeave6}
            >
              <Link to={"/vision"}>Vision</Link>
            </span>
            {isHovered6 && <Vision />}
            <span
              onMouseEnter={handleMouseEnter7}
              onMouseLeave={handleMouseLeave7}
            >
              <Link to={"/airpods"}>AirPods</Link>
            </span>
            {isHovered7 && <AirPods />}
            <span
              onMouseEnter={handleMouseEnter8}
              onMouseLeave={handleMouseLeave8}
            >
              <Link to={"/tv_home"}>TV & Home</Link>
            </span>
            {isHovered8 && <TvHome />}
            <span
              onMouseEnter={handleMouseEnter9}
              onMouseLeave={handleMouseLeave9}
            >
              <Link to={"/entertaiment"}>Entertaiment</Link>
            </span>
            {isHovered9 && <Entertaiment />}
            <span
              onMouseEnter={handleMouseEnter10}
              onMouseLeave={handleMouseLeave10}
            >
              <Link to={"/accessories"}>Accessories</Link>
            </span>
            {isHovered10 && <Accessories />}
            <span
              onMouseEnter={handleMouseEnter11}
              onMouseLeave={handleMouseLeave11}
            >
              <Link to={"/support"}>Support</Link>
            </span>
            {isHovered11 && <Support />}
          </nav>

          <div className="btns">
            <button onClick={handleOpenModal}>
              <img src={search} alt="" />
            </button>
            {isModalOpen && <Search />}

            <button onMouseDown={handleOpenModal2}>
              <img src={cart} alt="" />
            </button>
            {isModalOpen2 && <Cart />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
