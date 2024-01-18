import React from "react";
import dataProduct from "../../assets/image/data";
import Card from "../Card/Card";
const Popular = () => {
  return (
    <div className="px-7">
      <h1 className="md:text-2xl font-semibold">Popular Collection</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center md:px-3 gap-2">
        {dataProduct.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            new_price={data.new_price}
            old_price={data.old_price}
            time={data.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
