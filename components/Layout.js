import React, { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import Footer from "./Footer";
import Logo from "../assets/Logo";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";
import Hamburger from "../assets/hamburger";
import MobileMenuComponent from "./MobileMenuComponent";

const categories = [
  { name: "GALVENĀ", path: "/" },
  { name: "PAR MANI", path: "/about" },
  { name: "BLOGS", path: "/blog" },
  { name: "VEIKALS", path: "/shop" },
];

export default function Layout({ children }) {
  const [isClosed, setClosed] = useState(true);
  // const router = useRouter();

  var classNames = require("classnames");

  const toggleMobileMenu = () => {
    setClosed(!isClosed);
  };

  return (
    <div>
      <div className="relative mx-auto">
        <div className="flex item-center justify-around items-center shadow-md h-10 py-8 mb-8">
          <div>
            <Logo />
          </div>

          <div className="flex flex-row">
            {categories.map((category, index) => (
              <div
                className="font-bold text-grey1 m-1 hover:text-orange1 w-100"
                // #TODO: Pielikt active klasi. Visdrīzāk ar Classes libu.
                key={index}
              >
                <Link href={category.path} className="hidden md:block m-4">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <div
              className={classNames(
                "absolute flex-col items-center self-end py-8 mt-8 space-y-6 font-bold bg-white right-0 drop-shadow-md z-10 w-72",
                // #TODO: Ielikt smukāku transition mobile menu. Check @media in Layout.module.css
                { hidden: isClosed }
              )}
            >
              <MobileMenuComponent categories={categories} />
            </div>
          </div>
          <div className="flex">
            <div className="flex space-x-4 mr-2 items-center border-r-2 pr-2">
              {/* #TODO: Optimize child selectros for hover effect */}
              <div className="hover:fill-orange1 cursor-pointer">
                <Facebook />
              </div>
              <div className="hover:fill-orange1 cursor-pointer">
                <Twitter />
              </div>
              <div className="hover:fill-orange1 cursor-pointer">
                <Youtube />
              </div>
            </div>
            <div className="h-8 w-8 items-center mt-2">
              <Link href="shoppingcart">
                <Cart />
              </Link>
            </div>
          </div>
          <div
            className="md:hidden flex items-center"
            onClick={() => toggleMobileMenu()}
          >
            <Hamburger />
          </div>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}
