import React, { createContext } from "react";
import all_product from "../../assets/image/all_product";

export const ShopDataContext = createContext(null);

const ShopDataContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopDataContext.Provider value={contextValue}>
      {props.children}
    </ShopDataContext.Provider>
  );
};

export default ShopDataContextProvider;
