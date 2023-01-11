import React from "react";

const About = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div>
        Mani sauc Juris Baltačs. Šo mājaslapu izveidoju kā daļu no sava
        programmēšanas portfolio. Agrāk strādāju digitālajā mārketingā, tur
        pavadīju septiņus gadus līdz nolēmu kļūt par programmētāju.
        Programmēšanu apguvu pašmācības ceļā. <br />
        <br />
        <div className="flex md:flex-row flex-col">
          <div>
            <div>Manas galvenās prasmes programmēšanā:</div>
            <li>ReactJS</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>NextJS</li>
          </div>
          <br />
          <div className="md:pl-4">
            <div>
              Šīs mājaslapas <em>tech-stack:</em>
            </div>
            <li>MySQL datubāze uz Planetscale</li>
            <li>Pirsma kā datubāzes interfeiss</li>
            <li>NextJS izvietots uz Vercel</li>
            <li> Tailwind stilam</li>
            <li>
              {" "}
              Smalkāks skaidrojums par lapas funkcionalitāti un kodu,{" "}
              <a
                className="underline underline-offset-2 transition-all duration-300 active:text-orange1 md:hover:text-orange1"
                href="https://youtu.be/jImYMEDLDho"
                target="_blank"
              >
                šajā video
              </a>
              .
            </li>
          </div>
        </div>
      </div>
      <br />
      <div>
        Visas podkāsta sērijas un bloga raksti ir manis veidoti. Pateicoties
        podkāstam man bija iespēja satikt cilvēkus kā Vaira Vīķe-Freiberga,
        Valdis Zatlers, Jānis Skutelis, Inga Spriņģe un daudzus citus. Šajā
        mājaslapā ir pieejami tikai pirmie mirkļi no katras sērijas. Ja vēliedz
        dzirdēt sarunas,{" "}
        <a
          className="underline underline-offset-2 active:text-orange1 md:hover:text-orange1 transition-all duration-300"
          href="https://open.spotify.com/show/2B4z0QYgLOsqYCEdPAHnxw?si=43c54ac6a59249c8"
          target="_blank"
        >
          dodies uz Spotify
        </a>
        . <br />
        <br />
        Podkāstu pārtraucu veidot 2021. gada beigās un atvadījos ar šo video:
      </div>
      <br />
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src="https://www.youtube.com/embed/G3VaZzm5jDQ"
          title="Svarīgo detaļu podkāsts atvadās"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
