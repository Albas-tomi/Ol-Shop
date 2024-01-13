import React from "react";
import Arrow from "../../assets/image/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex py-3 px-14 gap-3 items-center">
      <span>HOME</span>
      <img src={Arrow} alt="arrow" />
      <span>SHOP</span>
      <img src={Arrow} alt="arrow" />
      <p>{product.category}</p>
      <img src={Arrow} alt="arrow" />
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
