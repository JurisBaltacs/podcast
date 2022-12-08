import React from "react";
import { PrismaClient } from "@prisma/client";
// import ReactHtmlParser from "react-html-parser";
// import parse from "html-react-parser";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import Youtube from "../../assets/youtube";
import styles from "./UniqueEpisode.module.css";

const prisma = new PrismaClient();
export async function getServerSideProps(context) {
  const episodes = await prisma.episode.findMany();

  const { params } = context;

  const uniqueEpisode = await prisma.episode.findUnique({
    where: { id: Number(params.id) },
  });

  // console.log("uniqueEpisode", uniqueEpisode);
  return {
    props: { episodes, uniqueEpisode },
  };
}

const EpisodePage = ({ uniqueEpisode }) => {
  // const parse = require("html-react-parser");
  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  return (
    <div>
      <div>{uniqueEpisode.name}</div>
      <img src={uniqueEpisode.image} />
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <button onClick={play}>Atksaņot 30 sekundes.</button>
      <audio id="a1">
        <source src={uniqueEpisode.audio_preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* <div
        dangerouslySetInnerHTML={{ __html: uniqueEpisode.html_description }}
      ></div> */}
      <div>{uniqueEpisode.description}</div>
      <br />
      <div>Baudi un dalies!</div>
      <Facebook />
      <Twitter />
      <Youtube />
      <br />
      <div className={styles.comment}>Vieta komentāram:</div>

      {/* <div>{uniqueEpisode.audio_preview_url}</div> */}
    </div>
  );
};

export default EpisodePage;
