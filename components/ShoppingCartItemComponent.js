import React, { useContext } from "react";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ShoppingCartItemComponent = ({ item }) => {
  const { removeItemFromCart, updateCartItem } = useContext(ShopContext);
  const attributes = item.attributes || [];

  <button
    onClick={() => {
      if (item.quantity <= 1) {
        removeItemFromCart(item.id);
      } else {
        updateCartItem({
          ...item,
          quantity: item.quantity - 1,
        });
      }
    }}
  >
    -
  </button>;

  return (
    <div className="grid grid-cols-12 mb-4 border-b-[1px] first-of-type:border-t-[1px] first-of-type:pt-4 pb-4 h-72">
      <div className="flex col-start-3 col-end-7 lg:col-start-3 lg:col-end-6">
        <img
          src={item.image}
          className="object-cover rounded-md max-w-[300px]"
        />
        <div className="mr-6 flex flex-col justify-between items-center ml-4">
          <button
            className="w-8 h-8 border rounded-lg border-grey4 cursor-pointer flex justify-center items-center pb-1 text-2xl text-grey4"
            onClick={() =>
              updateCartItem({
                ...item,
                quantity: item.quantity + 1,
              })
            }
          >
            +
          </button>
          <div>{item.quantity}</div>
          <button
            className="w-8 h-8 border rounded-lg border-grey4 cursor-pointer flex justify-center items-center pb-1 text-2xl text-grey4"
            onClick={() => {
              if (item.quantity <= 1) {
                removeItemFromCart(item.id);
              } else {
                updateCartItem({
                  ...item,
                  quantity: item.quantity - 1,
                });
              }
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="col-start-8 md:col-start-10 col-span-2 flex flex-col">
        <div>
          <div className="text-xl font-semibold tracking-tight text-grey1">
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
          <div className="text-base font-bold text-grey1 pb-2">
            {(item.price * item.quantity).toFixed(2)} &nbsp;
            {item.currency}
          </div>
        </div>
        <div className="flex-col">
          {/* Map through attributes of shop items and pass the corresponding attribute to AttributeComponent*/}
          {attributes.map((attribute, index) => {
            if (attribute.id === "size") {
              return (
                <div key={index}>
                  Izmērs
                  <div className="flex">
                    {attribute.items.map((attributeItem) => {
                      return (
                        <AttributeComponent
                          attributes={attributeItem.value}
                          key={attributeItem.value}
                          selected={attributeItem.value === item.selectedSize}
                          onClick={() =>
                            updateCartItem({
                              ...item,
                              selectedSize: attributeItem.value,
                            })
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              );
            } else if (attribute.id === "color") {
              return (
                <div key={index}>
                  Krāsa
                  <div className="flex">
                    {attribute.items.map((attributeItem) => {
                      return (
                        <AttributeComponent
                          attributes={attributeItem.value}
                          key={attributeItem.value}
                          isColor={true}
                          selected={attributeItem.value === item.selectedColor}
                          onClick={() =>
                            updateCartItem({
                              ...item,
                              selectedColor: attributeItem.value,
                            })
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItemComponent;
