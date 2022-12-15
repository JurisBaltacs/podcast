import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const saveCartItemsToLocalStorage = (cartItems) => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const addItemToCart = (item) => {
    const id = cartItems.length
      ? Math.max(...cartItems.map((item) => item.id)) + 1
      : 1;

    const itemWithId = {
      ...item,
      productId: item.id,
      id,
    };
    const updatedCartItems = [...cartItems, itemWithId];
    saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const updateCartItem = (updatedData) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === updatedData.id) {
        return updatedData;
      }
      return item;
    });
    // this.saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    // const currencyFromLocalStorage = localStorage.getItem("currency") || "usd";
    // this.setState({ selectedCurrency: currencyFromLocalStorage });

    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsFromLocalStorage) {
      try {
        const parsedCartItems = JSON.parse(cartItemsFromLocalStorage);
        setCartItems(parsedCartItems);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        // shopItemsObject,
        addItemToCart,
        updateCartItem,
        removeItemFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
