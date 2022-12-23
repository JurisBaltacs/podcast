import React from "react";
import Link from "next/link";
import ShopItemCard from "../components/ShopItemCard";
import { shopItemsObject } from "../assets/ShopItems";

const Shop = () => {

  return (
    <div className="w-[80%] mx-auto mb-8">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-6">
        {shopItemsObject.map((item) => (
          <Link href={"shopitem/" + item.id} key={item.id} className="mx-auto">
            <div>
              <ShopItemCard item={item} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
