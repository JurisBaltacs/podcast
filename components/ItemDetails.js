import React, { useContext } from "react";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ItemDetails = ({ shopItem }) => {

  const { addItemToCart } = useContext(ShopContext);

  const addToCart = (shopItem) => {
    addItemToCart(shopItem);
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full">
        <img className="aspect-square" src={shopItem.image} />
      </div>
      <div className="ml-4">
        <div className="font-bold text-black1 text-lg">
          {shopItem.type.charAt(0).toUpperCase() + shopItem.type.slice(1)}
        </div>
        <div className="flex">
          <AttributeComponent  attributes={shopItem.attributes} />
          <div>
            <div className="text-2xl">Cena</div>
            <div className="font-bold text-4xl">{shopItem.price}</div>
            <div
              className="rounded-lg bg-grey1 px-5 py-1 mt-4 h-8 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300 cursor-pointer"
              onClick={() => addToCart(shopItem)}
            >
              Pievienot grozam
            </div>
          </div>
        </div>
        <div className="font-bold text-black1 text-base">Apraksts</div>
        <div className="space-y-4 text-grey1 rounded-lg border border-grey3 w-full max-w-xl h-40 overflow-hidden  scrollbar">
          {shopItem.description}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
