import React, { useContext, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ItemDetails = ({ shopItem, selected }) => {
  const { addItemToCart, cartItems, updateCartItem } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  var classNames = require("classnames");

  const addToCart = () => {
    const itemInCart = cartItems.find(
      // Check if cart already contains this item with selected attributes
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

  // checkIfAllAttributesSet function is used to validate if item can be added to cart.
  const checkIfAllAttributesSet = () => {
    const attributes = shopItem.attributes || [];
    let isAttributeSet = true;

    attributes.forEach((attribute) => {
      if (attribute.id === "size" && !selectedSize) isAttributeSet = false;
      if (attribute.id === "color" && !selectedColor) isAttributeSet = false;
    });
    return isAttributeSet;
  };

  const isAttributeSet = checkIfAllAttributesSet();

  return (
    <div className="flex md:flex-row flex-col justify-center">
      <div className="max-w-md w-full mr-6">
        <img
          className="aspect-square object-contain w-full"
          src={shopItem.image}
        />
      </div>
      <div className="md:w-2/5 w-full">
        <div className="font-bold text-black1 text-2xl md:text-4xl pb-4">
          {shopItem.type.charAt(0).toUpperCase() + shopItem.type.slice(1)}
        </div>
        <div className="flex justify-between">
          <div>
            {/* Map through attributes of items in the shop and pass the corresponding attribute to the AttributeComponent component*/}
            {attributes.map((attribute, index) => {
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
                    <div className="pt-2">Izmērs</div>
                    <div key={attribute.id} className="flex">
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

          <div className="md:mr-16 mr-0">
            <div className="md:text-2xl text-xl">Cena</div>
            <div className="font-bold md:text-4xl text-xl">
              {(shopItem.price * 1).toFixed(2)}&nbsp;
              {shopItem.currency}
            </div>
            <div
              className={classNames(
                "rounded-md  px-5 py-1 mt-4 h-8 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300 cursor-pointer",
                { "bg-grey1": isAttributeSet, "bg-grey4": !isAttributeSet }
              )}
              onClick={() => {
                isAttributeSet
                  ? addToCart(shopItem)
                  : alert("Izvēlies attribūtus.");
              }}
            >
              Pievienot grozam
            </div>
          </div>
        </div>
        <div className="font-bold text-black1 text-base mt-4 ml-1">
          Apraksts
        </div>
        <div
          className={classNames(
            "h-48 border rounded-md mr-3 cursor-pointer flex justify-center items-center border-grey4 text-grey1 w-full",
            { "outline outline-grey1": selected, "border-0": selected }
          )}
        >
          <PerfectScrollbar>
            <div className="ml-1">{shopItem.description}</div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
