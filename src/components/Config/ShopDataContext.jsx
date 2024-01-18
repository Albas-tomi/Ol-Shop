import React, { createContext, useState } from "react";
import all_product from "../../assets/image/all_product";

export const ShopDataContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};
const ShopDataContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const clearCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  const getTotalPerItemId = () => {
    const totalPerItemId = {};
    Object.keys(cartItems).forEach((itemId) => {
      const product = all_product.find((item) => item.id === parseInt(itemId));
      if (product) {
        totalPerItemId[itemId] = cartItems[itemId] * product.new_price;
      } else {
        totalPerItemId[itemId] = 0;
      }
    });
    return totalPerItemId;
  };

  const total = getTotalPerItemId();
  const totalPayment = Object.values(total).reduce(
    (total, amount) => total + amount,
    0
  );

  const cartCount = {};
  let totalCart = 0;
  Object.keys(cartItems).forEach((itemId) => {
    const product = all_product.find((item) => item.id === parseInt(itemId));
    if (product) {
      cartCount[itemId] = cartItems[itemId];
      totalCart = Object.values(cartCount).reduce(
        (total, amount) => total + amount,
        0
      );
    }
  });

  const contextValue = {
    all_product,
    cartItems,
    totalPayment,
    totalCart,
    addToCart,
    removeToCart,
    clearCart,
  };

  return (
    <ShopDataContext.Provider value={contextValue}>
      {props.children}
    </ShopDataContext.Provider>
  );
};

export default ShopDataContextProvider;
