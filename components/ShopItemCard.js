import React from "react";
import { Card } from "flowbite-react";

const ShopItemCard = ({ item }) => {
  return (
    <div className="transition-all duration-300 ">
      <Card
        horizontal={true}
        imgSrc={item.image}
        className="hover:shadow-xl transition-all duration-300"
      >
        <div className="text-xl font-semibold tracking-tight text-grey1">
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="text-base font-bold text-grey1 pb-2">
            {(item.price * 1).toFixed(2)} &nbsp;
            {item.currency}
          </div>
          <div className="rounded-lg bg-grey1 px-5 py-1 mt-4 text-center text-sm font-medium text-white hover:bg-orange1 transition-all duration-300">
            Skatīt
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopItemCard;
