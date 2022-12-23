import React, { useContext, useState } from "react";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ItemDetails = ({ shopItem }) => {
  const { addItemToCart, cartItems, updateCartItem } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const addToCart = () => {
    const itemInCart = cartItems.find(
      (item) =>
        item.productId === shopItem.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (!itemInCart) {
      addItemToCart({
        ...shopItem,
        quantity: 1,
        selectedColor: selectedColor,
        selectedSize: selectedSize,
      });
    } else {
      updateCartItem({
        ...itemInCart,
        quantity: itemInCart.quantity + 1,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full">
        <img className="aspect-square " src={shopItem.image} />
      </div>
      <div className="ml-4">
        <div className="font-bold text-black1 text-lg">
          {shopItem.type.charAt(0).toUpperCase() + shopItem.type.slice(1)}
        </div>
        <div className="flex">
          <div>
            {shopItem.attributes.map((attribute, index) => {
              if (attribute.id === "color") {
                return (
                  <div key={index}>
                    Krāsa
                    <div key={attribute.id} className="flex">
                      {attribute.items.map((attributeItem) => {
                        return (
                          <AttributeComponent
                            attributes={attributeItem.value}
                            key={attributeItem.value}
                            isColor={true}
                            selectedColor={attributeItem.value}
                            onClick={() =>
                              setSelectedColor(attributeItem.value)
                            }
                            selected={selectedColor === attributeItem.value}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              }
              if (attribute.id === "size") {
                return (
                  <div key={index}>
                    Izmērs
                    <div key={attribute.id} className="pt-2 flex">
                      {attribute.items.map((attributeItem) => {
                        return (
                          <AttributeComponent
                            attributes={attributeItem.value}
                            key={attributeItem.value}
                            selectedSizer={attributeItem.value}
                            onClick={() => setSelectedSize(attributeItem.value)}
                            selected={selectedSize === attributeItem.value}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div>
            <div className="text-2xl">Cena</div>
            <div className="font-bold text-4xl">
              {(shopItem.price * 1).toFixed(2)}&nbsp;
              {shopItem.currency}
            </div>
            <div
              className="rounded-md bg-grey1 px-5 py-1 mt-4 h-8 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300 cursor-pointer"
              onClick={() => addToCart(shopItem)}
            >
              Pievienot grozam
            </div>
          </div>
        </div>
        <div className="font-bold text-black1 text-base">Apraksts</div>
        <div className="space-y-4 text-grey1 rounded-md border border-grey3 w-full max-w-xl h-40 overflow-hidden  scrollbar">
          {shopItem.description}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
