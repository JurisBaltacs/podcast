import React from "react";
import { shopItemsObject } from "../../assets/ShopItems";
import ItemDetails from "../../components/ItemDetails";

export async function getServerSideProps(context) {
  const { params } = context;
  const shopItem = shopItemsObject.find((item) => item.id === params.id);

  return {
    props: { shopItem: JSON.parse(JSON.stringify(shopItem)) },
  };
}

const ShopItem = ({ shopItem }) => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <ItemDetails shopItem={shopItem} />
    </div>
  );
};

export default ShopItem;
