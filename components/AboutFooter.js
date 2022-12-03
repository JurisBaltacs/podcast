import React from "react";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";

const AboutFooter = () => {
  return (
    <div>
      <div className="footer__title">BAUDI UN DALIES</div>
      <div className="footer__paragraph">
        Svarīgās detaļas ir ikmēneša podkāsts, kurā viesi dalās ar vērtīgākajiem
        ieskatiem no sava darba un dzīves kopumā.
      </div>
      <div className="footer__social">
        <Facebook />
        <Twitter />
        <Youtube />
      </div>
    </div>
  );
};

export default AboutFooter;
