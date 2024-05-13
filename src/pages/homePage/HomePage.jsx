import React from "react";
import "./homePage.scss";
import Footer from "../../components/navbar/footer/Footer";
import Section1 from "../../components/sections/section1/Section1";
import Section2 from "../../components/sections/section2/Section2";
import Section3 from "../../components/sections/section3/Section3";
import Section4 from "../../components/sections/section4/Section4";

const HomePage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default HomePage;
