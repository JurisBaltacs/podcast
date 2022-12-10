import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Logo from "../assets/Logo";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";
import styles from "./Layout.module.css";

const categories = [
  { name: "GALVENĀ", path: "/" },
  { name: "PAR MANI", path: "/about" },
  { name: "BLOGS", path: "/blog" },
  { name: "VEIKALS", path: "/shop" },
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* #TODO: Salabot top menu klasi. Viņas positioning context nesaprotams. Domā, ka mala ir citur. */}
      {/* <div className="flex justify-around items-center shadow-md h-10 py-8 mb-8"> */}
      <div className="relative container mx-auto ">
        <div className="flex item-center justify-around items-center shadow-md h-10 py-8 mb-8">
          <div>
            <Logo />
          </div>
          <div
            className="flex flex-row"
            // className={
            //   isOpen
            //     ? styles.menu__top_menu_item_wrapper
            //     : styles.menu__top_menu_item_wrapper_open
            // }
          >
            {/* <div className="flex flex-row"> */}
            {categories.map((category, index) => (
              <div
                className="font-bold text-grey1 m-1 hover:text-orange1"
                // #TODO: Pielikt active klasi. Visdrīzāk ar Classes libu.
                key={index}
              >
                <Link
                  href={category.path}
                  className="m-4"
                  // className={category.path === router.asPath ? "active" : ""}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex">
            <div className="flex space-x-4 mr-2 items-center ">
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
            <div className="h-8 w-8 border-l pl-2 items-center mt-2">
              <Link href="shoppingcart">
                <Cart />
              </Link>
            </div>
          </div>
          {/* <div id="mobile">
            <i
              onClick={() => handleClick()}
              className={isOpen ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div> */}
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}
