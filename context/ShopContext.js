import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

export const ShopContextProvider = ({ children, blogPosts }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

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
    saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    saveCartItemsToLocalStorage(updatedCartItems);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
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
        addItemToCart,
        updateCartItem,
        removeItemFromCart,
        blogPosts,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
