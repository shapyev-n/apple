import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import StoreBar from "../components/modals/StoreBar";
import Mac from "../components/modals/Mac";
import Ipad from "../components/modals/Ipad";
import Iphone from "../components/modals/Iphone";
import Watch from "../components/modals/Watch";
import Vision from "../components/modals/Vision";
import AirPods from "../components/modals/AirPods";
import TvHome from "../components/modals/TvHome";
import Entertaiment from "../components/modals/Entertaiment";
import Accessories from "../components/modals/Accessories";
import Support from "../components/modals/Support";
import Search from "../components/modals/Search";
import Cart from "../components/modals/Cart";

const MainRoutes = () => {
  const MY_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/store",
      element: <StoreBar />,
      id: 2,
    },
    {
      link: "/mac",
      element: <Mac />,
      id: 3,
    },
    {
      link: "/ipad",
      element: <Ipad />,
      id: 4,
    },
    {
      link: "/iphone",
      element: <Iphone />,
      id: 5,
    },
    {
      link: "/watch",
      element: <Watch />,
      id: 6,
    },
    {
      link: "/vision",
      element: <Vision />,
      id: 7,
    },
    {
      link: "/airpods",
      element: <AirPods />,
      id: 8,
    },
    {
      link: "/tv_home",
      element: <TvHome />,
      id: 9,
    },
    {
      link: "/entertaiment",
      element: <Entertaiment />,
      id: 10,
    },
    {
      link: "/accessories",
      element: <Accessories />,
      id: 11,
    },
    {
      link: "/support",
      element: <Support />,
      id: 12,
    },
    {
      link: "/search",
      element: <Search />,
      id: 13,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 14,
    },
  ];
  return (
    <Routes>
      {MY_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
