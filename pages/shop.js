import React, { useContext } from "react";
import Link from "next/link";
import ShopContext from "../context/ShopContext";
import ShopItemCard from "../components/ShopItemCard";
import { shopItemsObject } from "../assets/ShopItems";

const Shop = () => {
  const { cartItems, setCartItems, addItemToCart, updateCartItem } =
    useContext(ShopContext);

  // const addToCart = () => {
  //   const itemInCart = cartItems.find(
  //     (item) => item.cartItemId === cartItems.cartItemId
  //   );
  //   if (!itemInCart) {
  //     addItemToCart({
  //       ...shopItemsObject,
  //       quantity: 1,
  //     });
  //   } else {
  //     updateCartItem({
  //       ...itemInCart,
  //       quantity: itemInCart.quantity + 1,
  //     });
  //   }
  // };

  const addToCart = (item) => {
    // #TODO: Vai te vajag {}?
    addItemToCart(item);
  };

  return (
    <div className="w-[90%] mx-auto mb-8">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-6">
        {shopItemsObject.map((item) => (
          <Link href={"shopitem/" + item.id} key={item.id} className="mx-auto">
            <div>
              <ShopItemCard item={item} addToCart={addToCart} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
