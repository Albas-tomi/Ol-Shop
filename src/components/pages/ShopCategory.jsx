import React, { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../Config/ShopDataContext";
import Card from "../Card/Card";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopDataContext);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [visible, setVisible] = useState(4);

  const productLength = all_product.filter(
    (data) => data.category === props.category
  );

  const handleFilterPrice = (data) => {
    if (data.includes("1")) {
      setMinPrice(50000);
      setMaxPrice(100000);
    } else if (data.includes("2")) {
      setMinPrice(100000);
      setMaxPrice(150000);
    } else if (data.includes("3")) {
      setMinPrice(150000);
      setMaxPrice(200000);
    } else if (data.includes("4")) {
      setMinPrice(200000);
      setMaxPrice(250000);
    } else {
      setMinPrice(null);
      setMaxPrice(null);
    }
    setSelectedFilter(data);
  };
  const handleFilterData = () => {
    let dataDisplay = productLength;
    if (selectedFilter) {
      dataDisplay = dataDisplay.filter(
        (data) => data.new_price >= minPrice && data.new_price <= maxPrice
      );
    }
    setDataFilter(dataDisplay);
  };

  useEffect(() => {
    handleFilterData();
  }, [selectedFilter, props.category, maxPrice, minPrice]);

  const handleClearFilter = () => {
    setSelectedFilter("");
    setMaxPrice(null);
    setMinPrice(null);
  };
  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="">
      <figure>
        <img className="md:px-7" src={props.banner} alt="banner" />
      </figure>
      <div className="flex gap-4 justify-center md:justify-end w-full md:px-7">
        <select
          onChange={(e) => handleFilterPrice(e.target.value)}
          value={selectedFilter}
          className="select my-2 select-bordered  max-w-xs"
        >
          <option value="">Sort by Price</option>
          <option value="1">Rp.50.000 - Rp.100.000</option>
          <option value="2">Rp.100.000 - Rp.150.000</option>
          <option value="3">Rp.150.000 - Rp.200.000</option>
          <option value="4">Rp.200.000 - Rp.250.000</option>
        </select>

        <button onClick={handleClearFilter} className=" my-2">
          Clear
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center md:px-3 gap-2">
        {dataFilter.length >= 1 ? (
          dataFilter.slice(0, visible).map((data) => {
            return (
              <div key={data.id}>
                <Card
                  id={data.id}
                  name={data.name}
                  image={data.image}
                  new_price={data.new_price}
                  old_price={data.old_price}
                />
              </div>
            );
          })
        ) : (
          <div className="mx-auto absolute  text-center w-full">
            <p className="font-bold text-xl ">Data Kosong</p>
          </div>
        )}
      </div>
      <div className="w-full text-center my-3">
        <button
          onClick={handleLoadMore}
          className={`${
            visible >= dataFilter.length
              ? "hidden"
              : "btn btn-wide bg-blue-500 text-white mx-auto"
          } `}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
