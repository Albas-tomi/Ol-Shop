import React, { useContext } from "react";
import { ShopDataContext } from "../Config/ShopDataContext";
import Swal from "sweetalert2";

const CardCard = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeToCart,
    clearCart,
    totalPayment,
  } = useContext(ShopDataContext);

  const handleClearCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To delete the item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <table className="w-full mt-4 px-5">
        <thead>
          <tr className="md:grid md:text-base hidden text-sm gap-3 md:gap-0 grid-flow-col  md:grid-cols-6 justify-center items-center border-b-4 mx-7 pb-3">
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        {all_product.map((data) => {
          // Mapping data product
          //dengan data id sesuai card item Id yang qty > 0
          if (cartItems[data.id] > 0) {
            return (
              <tbody key={data.id}>
                <tr className="md:grid flex px-4 text-center border-b-2 md:mx-7 py-2 mt-4 grid-cols-6 justify-center items-center">
                  <td>
                    <img
                      src={data.image}
                      className="md:w-28 w-full mx-auto"
                      alt="gambar"
                    />
                  </td>
                  <td className="text-sm md:text-base">{data.name}</td>
                  <td className="text-sm md:text-base">Rp.{data.new_price}</td>
                  <td>
                    <button
                      className="md:text-lg text-sm font-bold"
                      onClick={() => removeToCart(data.id)}
                    >
                      -
                    </button>
                    <span className="mx-2  px-4 rounded-sm bg-gray-300 ">
                      {cartItems[data.id]}
                    </span>
                    <button
                      className="md:text-lg text-sm font-bold"
                      onClick={() => addToCart(data.id)}
                    >
                      +
                    </button>
                  </td>

                  <td className="text-sm md:text-base">
                    Rp.{data.new_price * cartItems[data.id]}
                  </td>
                  <td>
                    <button onClick={() => handleClearCart(data.id)}>X</button>
                  </td>
                </tr>
              </tbody>
            );
          } else {
            return null;
          }
        })}
      </table>
      <div className="md:w-1/2 w-full px-7 md:px-0 md:mx-7">
        <h2 className="text-xl font-bold my-2">Cart Total</h2>
        <section className="flex flex-col gap-3 ">
          <div className="border-b-2  py-3  flex items-center justify-between  border-gray-600 ">
            <p>Subtotal</p>
            <p>Rp.{totalPayment}</p>
          </div>
          <div className="border-b-2 py-3 flex items-center justify-between  border-gray-600 ">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="  flex justify-between   ">
            <p className="font-semibold text-lg">Total</p>
            <p className="font-semibold text-lg">Rp.{totalPayment}</p>
          </div>
          <button
            className={`btn  md:btn-wide w-full bg-blue-500 text-white ${
              totalPayment === 0 && "btn-disabled"
            }`}
          >
            PROCEED TO CHECKOUT
          </button>
        </section>
      </div>
    </div>
  );
};

export default CardCard;
