import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ShopItemCard from "../components/ShopItemCard";

const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);
  console.log("cartItems cart screen", cartItems);


  if (cartItems) {
    return (
      <div>
        {cartItems.map((item, index) => {
          return <ShopItemCard item={item} key={index} />;
        })}
      </div>
    );
  } else {
    return <div>Cart is empty</div>;
  }
};

export default ShoppingCart;
