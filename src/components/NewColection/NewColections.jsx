import React from "react";
import dataNewCollection from "../../assets/image/new_collections";
import Card from "../Card/Card";

const NewColections = () => {
  return (
    <div className="px-3 ">
      <h1 className="md:text-2xl font-semibold">New Collection</h1>
      <div className="grid md:grid-cols-4  gap-5">
        {dataNewCollection.map((data) => (
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

export default NewColections;
