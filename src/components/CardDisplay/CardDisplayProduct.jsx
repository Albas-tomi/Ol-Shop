import React from "react";

const CardDisplayProduct = ({ product }) => {
  return (
    <div className="grid grid-cols-2">
      <section className="  p-3 ">
        <div className="flex justify-end gap-3  py-3 items-center grid-cols-2">
          <div className="flex  flex-col py-6 justify-evenly  gap-3  ">
            <img className="h-28" src={product.image} alt="gambar" />
            <img className="h-28" src={product.image} alt="gambar" />
            <img className="h-28" src={product.image} alt="gambar" />
            <img className="h-28" src={product.image} alt="gambar" />
          </div>
          <div className="">
            <img className="w-[28rem]" src={product.image} alt="gambar" />
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
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <span>{2.2}</span>
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
            />
            <p>S</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input value={"M"} type="radio" name="radio-1" className="radio" />
            <p>M</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input value={"L"} type="radio" name="radio-1" className="radio" />
            <p>L</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input value={"XL"} type="radio" name="radio-1" className="radio" />
            <p>XL</p>
          </span>
          <span className="flex items-center mx-3  gap-1">
            <input
              value={"XXL"}
              type="radio"
              name="radio-1"
              className="radio"
            />
            <p>XXL</p>
          </span>
        </div>
        <button className="btn btn-wide">Add to Cart</button>
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
