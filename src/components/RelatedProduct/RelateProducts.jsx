import React, { useContext } from "react";
import Card from "../Card/Card";
import { ShopDataContext } from "../Config/ShopDataContext";

const RelateProducts = (props) => {
  const { all_product } = useContext(ShopDataContext);
  const dataRelated = all_product.filter(
    (data) => data.category === props.productDataDetail.category
  );
  return (
    <div className="px-7">
      <div className="md:w-1/6 w-full  mx-auto text-center my-4">
        <h1 className="text-2xl font-semibold">Related Products</h1>
        <hr className="rounded-md h-1 bg-black" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center md:px-3 gap-2">
        {dataRelated.slice(0, 4).map((data) => (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            new_price={data.new_price}
            old_price={data.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelateProducts;
