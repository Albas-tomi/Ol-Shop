import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="card w-72 hover:shadow-md hover:shadow-blue-400/40 duration-300 cursor-pointer bg-base-100 shadow-xl">
        <Link to={`/product/${props.id}`}>
          <figure className=" ">
            <img className="rounded-t-md " src={props.image} alt="Shoes" />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title line-clamp-3">{props.name}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Rp.{props.new_price}</div>
            <div className="badge badge-outline line-through text-gray-400 ">
              Rp.{props.old_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
