import React from "react";
import Facebook from "../Assets/facebook";
import Twitter from "../Assets/twitter";
import Youtube from "../Assets/youtube";
import "./AboutFooter.scss";

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
