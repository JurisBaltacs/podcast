import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactAudioPlayer from "react-audio-player";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import Youtube from "../../assets/youtube";

const prisma = new PrismaClient();
export async function getServerSideProps(context) {
  // #TODO: findMany() noderēs pie static props
  // const episodes = await prisma.episode.findMany();

  const { params } = context;

  const uniqueEpisode = await prisma.episode.findUnique({
    where: { id: Number(params.id) },
  });

  return {
    props: { uniqueEpisode },
  };
}

const EpisodePage = ({ uniqueEpisode }) => {

  return (
    <div className="flex justify-center pt-10">
      <div className="w-[80%]">
        <div className="float-right pl-6">
          <img className="rounded-lg w-[300px]" src={uniqueEpisode.image} />
          <ReactAudioPlayer
            src={uniqueEpisode.audio_preview_url}
            controls
            className="background: red"
          />
        </div>

        <div className="text-3xl font-bold mb-8">{uniqueEpisode.name}</div>
        <div
          dangerouslySetInnerHTML={{ __html: uniqueEpisode.html_description }}
        ></div>
        {/* <div className="item-body">{uniqueEpisode.description}</div> */}

        <br />
        <div className="mb-4">Baudi un dalies!</div>
        <div className="flex space-x-4">
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
        <br />
        {/* <div className={styles.comment}>Vieta komentāram:</div> */}
      </div>
    </div>
  );
};

export default EpisodePage;
