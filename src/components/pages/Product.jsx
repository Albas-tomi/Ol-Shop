import React, { useContext } from "react";
import { ShopDataContext } from "../Config/ShopDataContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import CardDisplayProduct from "../CardDisplay/CardDisplayProduct";

const Product = () => {
  const { all_product } = useContext(ShopDataContext);
  const { productId } = useParams();
  const productData = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={productData} />
      <CardDisplayProduct product={productData} />
    </div>
  );
};

export default Product;
