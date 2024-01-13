import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import NewColections from "../NewColection/NewColections";
import NewsLetters from "../NewsLetters/NewsLetters";

const ShopPage = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColections />
      <NewsLetters />
    </div>
  );
};

export default ShopPage;
