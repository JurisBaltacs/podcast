import React, { useContext } from "react";
import { Card } from "flowbite-react";
import { useRouter } from "next/router";
import AttributeComponent from "./AttributeComponent";
import ShopContext from "../context/ShopContext";

const ShopItemCard = ({ item }) => {
  const { removeItemFromCart } = useContext(ShopContext);
  const router = useRouter();
  const attributes = item.attributes || [];
  const isShoppingCart = router.pathname === "/shoppingcart";

  return (
    <div className="w-96 transition-all duration-300 ">
      <Card
        horizontal={true}
        imgSrc={item.image}
        className="hover:shadow-xl transition-all duration-300"
      >
        <div className="text-xl font-semibold tracking-tight text-grey1">
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </div>
        <div
          onClick={() => removeItemFromCart(item.id)}
          // onClick={() => console.log("item.id", item.id)}
          className="border border-xl"
        >
          Izņemt
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="text-base font-bold text-grey1 pb-2">
            {item.price}
          </div>
          <AttributeComponent attributes={attributes} />
          {!isShoppingCart ? (
            <div className="rounded-lg bg-grey1 px-5 py-1 mt-4 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300">
              Skatīt
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
};

export default ShopItemCard;
