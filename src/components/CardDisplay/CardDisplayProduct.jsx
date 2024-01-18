import React, { useContext, useState } from "react";
import { ShopDataContext } from "../Config/ShopDataContext";
import Swal from "sweetalert2";

const CardDisplayProduct = ({ product }) => {
  const [selectedSize, setSeletedSize] = useState("");
  const { addToCart } = useContext(ShopDataContext);

  const handleSizeChange = (e) => {
    setSeletedSize(e.target.value);
  };

  const handleToAddCart = (id) => {
    addToCart(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Succes add item to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <input
        key={index}
        type="radio"
        name="rating-6"
        className={`${
          index < product.rate
            ? "mask mask-star-2 bg-orange-400"
            : "mask mask-star-2 bg-orange-100"
        }`}
      />
    ));

  return (
    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2">
      <section className="p-3 ">
        <div className="flex justify-end md:justify-center gap-3  py-3 items-center lg:grid-cols-2">
          <div className="flex flex-col py-6 justify-evenly  gap-3  ">
            <img
              className="lg:h-28 md:h-24 h-20"
              src={product.image}
              alt="gambar"
            />
            <img
              className="lg:h-28 md:h-24 h-20"
              src={product.image}
              alt="gambar"
            />
            <img
              className="lg:h-28 md:h-24 h-20"
              src={product.image}
              alt="gambar"
            />
            <img
              className="lg:h-28 md:h-24 h-20"
              src={product.image}
              alt="gambar"
            />
          </div>
          <div className="">
            <img
              className="lg:w-[28rem] md:w-[18rem] w-[20 rem]"
              src={product.image}
              alt="gambar"
            />
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-2 px-3 py-5">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex gap-3">
          <span className="text-lg">Rp.{product.new_price}</span>
          <span className="text-gray-400  text-lg line-through">
            Rp.{product.old_price}
          </span>
        </div>
        <div className="rating flex gap-2 items-center  rating-md">
          {stars}
          <span>{product.rate}</span>
        </div>
        <p className="text-sm my-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          adipisci aspernatur tenetur numquam, libero consequuntur hic,
          voluptate architecto iste fugiat saepe. Repudiandae, doloremque dolor
          amet voluptatem possimus ex repellat mollitia?
        </p>
        <div className="size flex items-center">
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"S"}
              type="radio"
              name="radio-1"
              className="radio pl-1"
              checked={selectedSize === "S"}
              onChange={handleSizeChange}
            />

            <p>S</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"M"}
              type="radio"
              name="radio-1"
              className="radio"
              checked={selectedSize === "M"}
              onChange={handleSizeChange}
            />
            <p>M</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"L"}
              type="radio"
              name="radio-1"
              className="radio"
              checked={selectedSize === "L"}
              onChange={handleSizeChange}
            />
            <p>L</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"XL"}
              type="radio"
              name="radio-1"
              className="radio"
              checked={selectedSize === "XL"}
              onChange={handleSizeChange}
            />
            <p>XL</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"XXL"}
              type="radio"
              name="radio-1"
              className="radio"
              checked={selectedSize === "XXL"}
              onChange={handleSizeChange}
            />
            <p>XXL</p>
          </span>
        </div>
        <button
          onClick={() => handleToAddCart(product.id)}
          className="btn bg-blue-500 text-white  md:w-full lg:w-1/2  lg:mx-0 py-2 mx-auto btn-wide"
        >
          Add to Cart
        </button>

        <div className="flex flex-col">
          <div className="flex gap-3">
            <strong> Category :</strong>
            <p className="text-gray-600">jacket,modern,style</p>
          </div>
          <div className="flex gap-3">
            <strong>Tag :</strong>
            <p className="text-gray-600">diskon,korean,style</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDisplayProduct;
