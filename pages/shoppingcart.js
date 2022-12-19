import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
// import ShopItemCard from "../components/ShopItemCard";
import ShoppingCartItemComponent from "../components/ShoppingCartItemComponent";

const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);
  console.log("cartItems cart screen", cartItems);

  if (cartItems.length > 0) {
    return (
      <div className="w-[80%] mx-auto">
        {cartItems.map((item, index) => {
          return <ShoppingCartItemComponent item={item} key={index} />;
        })}
      </div>
    );
  } else {
    return <div>CGrozs ir tukšs</div>;
  }
};

export default ShoppingCart;
