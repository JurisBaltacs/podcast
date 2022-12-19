import React, { useContext } from "react";
import { Card } from "flowbite-react";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ShoppingCartItemComponent = ({ item }) => {
  const { removeItemFromCart } = useContext(ShopContext);
  const attributes = item.attributes || [];

  return (
    <div className="grid grid-cols-12 mb-4 border-b-[1px] first-of-type:border-t-[1px] first-of-type:pt-4">
      <img src={item.image} className="col-span-2 col-start-3 w-[250px]" />
      <div className="col-start-5 pl-4">
        <div className="text-xl font-semibold tracking-tight text-grey1">
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </div>
        <div className="text-base font-bold text-grey1 pb-2">{item.price}</div>
      </div>
      <div className="col-start-8 col-span-2">
        <AttributeComponent attributes={attributes} />
        <div
          onClick={() => removeItemFromCart(item.id)}
          className="rounded-lg bg-grey1 px-5 py-1 mt-4 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300 cursor-pointer"
        >
          Izņemt
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItemComponent;
