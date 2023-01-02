import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ShoppingCartItemComponent from "../components/ShoppingCartItemComponent";
import ShoppingCartItemComponentMobile from "../components/ShoppingCartItemComponentMobile";

const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);

  const findItemTotals = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    let currency = null;

    cartItems.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      totalPrice = totalPrice + item.price * item.quantity;
      currency = item.currency;
    });

    return { totalPrice, currency, totalQuantity };
  };

  const { totalPrice, currency, totalQuantity } = findItemTotals();

  if (cartItems.length > 0) {
    return (
      <div className="w-[80%] mx-auto ">
        <div className="max-md:hidden">
          {cartItems.map((item, index) => {
            return <ShoppingCartItemComponent item={item} key={index} />;
          })}
        </div>
        <div className="md:hidden">
          {cartItems.map((item, index) => {
            return <ShoppingCartItemComponentMobile item={item} key={index} />;
          })}
        </div>
        <div className="grid grid-cols-12 grid-rows-2">
          <div className="col-start-1">Daudzums:</div>
          <div className="font-semibold col-start-5 md:col-start-3">
            {totalQuantity}
          </div>
          <div className="col-start-1">Kopā:</div>
          <div className="font-semibold col-start-5 md:col-start-3 col-span-6">
            {totalPrice.toFixed(2)} &nbsp;
            {currency}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="w-[80%] mx-auto">Grozs ir tukšs</div>;
  }
};

export default ShoppingCart;
