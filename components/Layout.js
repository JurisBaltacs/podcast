import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  var classNames = require("classnames");

  const isTopMenu = !!router;

  const toggleMobileMenu = () => {
    setClosed(!isClosed);
  };
  return (
    // <div onClick={() => toggleMobileMenu()}> #TODO: Vai var būt divi onClick toggle eventi? Šis ne vienmēr nostrādā.
    <div>
      <div className="relative mx-auto">
        <div className="flex item-center justify-around items-center shadow-md h-10 py-8 mb-6">
          <Logo />

          <div className="flex flex-row static">
            {categories.map((category, index) => (
              <div
                className="font-bold text-grey1 m-1 hover:text-orange1 w-100 transition-all duration-300"
                key={index}
              >
                {/* #TODO: Vai šo active klasi nevar noteikt vienkāršāk? */}
                <Link
                  href={category.path}
                  className={classNames("hidden md:block m-4 border-orange1", {
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
                // #TODO: Ielikt smukāku transition mobile menu. Check @media in Layout.module.css
                { hidden: isClosed }
              )}
            >
              <MobileMenuComponent categories={categories} />
            </div>
          </div>
          <div className="flex absolute md:static">
            <div className="flex space-x-4 mr-2 items-center border-r-2 pr-2">
              {/* #TODO: Is there a more elegant way to make icons switch collors between top and bottom menu? */}
              <Facebook isTopMenu={isTopMenu} />
              <Twitter isTopMenu={isTopMenu} />
              <Youtube isTopMenu={isTopMenu} />
            </div>
            <div>
              {/* <div className="flex flex-wrap items-center gap-2"></div> */}
              <Link href="/shoppingcart">
                <Cart />
              </Link>
            </div>
            <div className="w-6 h-6 rounded-full bg-red-500 relative bottom-3 ml-[-10px]"></div>
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
