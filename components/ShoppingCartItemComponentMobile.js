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
    <div className="grid grid-cols-12 pb-4 mb-4 border-b-[1px] first-of-type:border-t-[1px]">
      <div className="flex-col col-span-12 row-start-1 row-end-6 pb-4">
        <img src={item.image} className="object-cover rounded-md" />
        <div className="mr-4 flex flex-row justify-between items-center ml-4 mt-2">
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
          <div>{item.quantity}</div>

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
        </div>
      </div>

      <div className="row-start-8 flex flex-col col-span-12">
        <div className="text-xl font-semibold tracking-tight text-grey1 ">
          <div className="grid grid-cols-6">
            <div>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
            <div className="col-start-5">
              {(item.price * item.quantity).toFixed(2)}&nbsp;
              {item.currency}
            </div>
          </div>
        </div>
        <div className="flex">
          {attributes.map((attribute, index) => {
            if (attribute.id === "size") {
              return (
                <div key={index}>
                  Izmērs
                  <div className="flex mt-1">
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
                  <div className="flex mt-1">
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
