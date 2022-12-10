import React from "react";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";

const AboutFooter = () => {
  return (
    <div className="pl-[1%] w-5/6">
      <div className="font-black text-2xl mb-4">BAUDI UN DALIES</div>
      <div className="text-grey6 mb-4">
        Svarīgās detaļas ir ikmēneša podkāsts, kurā viesi dalās ar vērtīgākajiem
        ieskatiem no sava darba un dzīves kopumā.
      </div>
      <div className="flex fill-white space-x-4">
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
    </div>
  );
};

export default AboutFooter;
