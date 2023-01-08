import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";
import SDLogo from "../assets/sd-logo.png";
import SDLogoSmall from "../assets/sd-logo-small.png";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";
import Hamburger from "../assets/hamburger";
import MobileMenuComponent from "./MobileMenuComponent";
import ShopContext from "../context/ShopContext";
import CloseIcon from "../assets/closeIcon";

const categories = [
  { name: "GALVENĀ", path: "/" },
  { name: "PAR PROJEKTU", path: "/about" },
  { name: "BLOGS", path: "/blog" },
  { name: "VEIKALS", path: "/shop" },
];

export default function Layout({ children }) {
  const { cartItems } = useContext(ShopContext);
  const [isClosed, setClosed] = useState(true);

  const router = useRouter();
  var classNames = require("classnames");
  const isTopMenu = !!router;
  const isItemInCart = cartItems.length > 0;

  const findQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
    });
    return totalQuantity;
  };

  let totalQuantity = findQuantity();

  return (
    <div>
      <div className="flex item-center justify-around items-center shadow-md h-10 py-8 mb-6">
        <Link href={"/"}>
          <Image
            src={SDLogo}
            alt="logo"
            width="150"
            height="auto"
            className="rounded-md overflow-hidden max-md:hidden"
          />
          <Image
            src={SDLogoSmall}
            alt="small logo"
            width="40"
            height="auto"
            className="rounded-md overflow-hidden md:hidden"
          />
        </Link>

        <div className="flex flex-row static">
          {categories.map((category, index) => (
            <div
              className="font-bold text-grey1 m-1 hover:text-orange1 w-100 transition-all duration-300"
              key={index}
            >
              <Link
                href={category.path}
                className={classNames("hidden md:block m-2 border-orange1", {
                  // Check if category is selected and add border if yes.
                  "border-b-2": router.pathname === category.path,
                })}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div
            className={classNames(
              "absolute flex-col items-center self-end py-8 mt-8 space-y-6 font-bold bg-white right-0 drop-shadow-md z-10 w-72",
              { hidden: isClosed }
            )}
          >
            <MobileMenuComponent
              categories={categories}
              onClick={() => setClosed(true)}
            />
          </div>
        </div>
        <div className="flex absolute md:static">
          <div className="flex space-x-4 mr-2 items-center border-r-2 pr-2">
            {/* isTopMenu prop shows the icons that they are in the top menu and not in the footer. That is required for different styles*/}
            <Facebook isTopMenu={isTopMenu} />
            <Twitter isTopMenu={isTopMenu} />
            <Youtube isTopMenu={isTopMenu} />
          </div>
          <div>
            <Link href="/shoppingcart">
              <Cart />
            </Link>
          </div>

          <Link href="/shoppingcart">
            <div
              style={{ opacity: isItemInCart ? 1 : 0 }}
              className="w-6 h-6 rounded-full bg-red-500 relative bottom-3 ml-[-10px] pl-2 font-bold text-white"
            >
              <div className="flex justify-center translate-x-[-27%]">
                {totalQuantity}
              </div>
            </div>
          </Link>
        </div>
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setClosed(!isClosed)}
        >
          {isClosed ? <Hamburger /> : <CloseIcon />}
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}
