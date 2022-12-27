import React from "react";
import { Card } from "flowbite-react";

const ShopItemCard = ({ item }) => {
  return (
    <div className="transition-all duration-300">
      <Card
        horizontal={true}
        imgSrc={item.image}
        className="hover:shadow-xl transition-all duration-300 md:h-48 h-auto w-full"
      >
        <div className="md:text-xl font-semibold tracking-tight text-grey1 text-2xl">
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </div>
        <div className="flex md:flex-col items-start justify-between">
          <div className="md:text-base font-bold text-grey1 pb-2 text-2xl">
            {(item.price * 1).toFixed(2)} &nbsp;
            {item.currency}
          </div>
          <div className="rounded-lg bg-grey1 px-5 py-1 md:mt-4 text-center md:text-sm text-xl font-medium text-white hover:bg-orange1 transition-all duration-300">
            Skatīt
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopItemCard;
