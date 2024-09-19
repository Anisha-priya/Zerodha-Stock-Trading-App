import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import RightSection from "./RightSection";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, 
        advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your 
        Android and iOS devices."
        tryDemo=""
        learnmore=""
        googlePlay=""
        appStore=""
      />
       <RightSection imageURL="media/console.png"
        productName="console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your 
        trades and investments with in-depth reports and visualisations.."
        learnmore="" />
      <LeftSection
        imageURL="media/coin.png"
        productName="coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to 
        your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnmore=""
        googlePlay=""
        appStore=""
      />
      <RightSection imageURL="media/Kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
        If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore=""
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage 
        and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnmore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
      Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
