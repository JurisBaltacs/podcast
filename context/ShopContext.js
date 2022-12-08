import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

const shopItemsObject = [
  { type: "shirt", size: "L", color: "white", price: "50 USD", id: "1" },
  { type: "shorts", size: "XS", color: "black", price: "22 USD", id: "2" },
  { type: "hat", size: "M", color: "MAGA-red", price: "5 USD", id: "3" },
];
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const id = cartItems.length
      ? Math.max(...cartItems.map((item) => item.id)) + 1
      : 1;

    const itemWithId = {
      ...item,
      productId: item.id,
      id,
    };
    // console.log("cartItems in context", cartItems);
    // #TODO: Ja izmantoju šo updatedCartItems, tad error, ka cartItems not iterable
    const updatedCartItems = [...cartItems, itemWithId];
    // saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
    // setCartItems({ ...cartItems, itemWithId });
  };
  const updateCartItem = (updatedData) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === updatedData.id) {
        return updatedData;
      }
      return item;
    });
    // this.saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems({ cartItems: updatedCartItems });
  };
  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        shopItemsObject,
        addItemToCart,
        updateCartItem,

      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
