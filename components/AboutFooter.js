import React from "react";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import LinkedIn from "../assets/linkedin";

const AboutFooter = () => {
  return (
    <div className="pl-4 mb-4">
      <div className="font-black text-2xl md:mb-4">VĒRTS ZINĀT</div>
      <div className="text-grey6 mb-4">
        Svarīgās detaļas bija podkāsts, ko agrāk veidoja Juris Baltačs. Šī lapa
        nav podkāsts, bet gan daļa no Jura programmēšanas portfolio.
        <br />
        Podkāstu 'Svarīgās detaļas'{" "}
        <a
          className="underline underline-offset-2 transition-all duration-300 hover:text-white"
          href="https://open.spotify.com/show/2B4z0QYgLOsqYCEdPAHnxw?si=43c54ac6a59249c8"
          target="_blank"
        >
          vari aplūkot šeit
        </a>
        .
        <br />
        Ja Gribi redzēt lapas kodu, diedies uz{" "}
        <a
          className="underline underline-offset-2 transition-all duration-300 hover:text-white"
          href="https://github.com/JurisBaltacs/podcast"
          target="_blank"
        >
          Jura GitHub
        </a>
        .
      </div>
      <div className="flex fill-white space-x-4">
        <Facebook />
        <Twitter />
        <Youtube />
        <LinkedIn />
      </div>
    </div>
  );
};

export default AboutFooter;
