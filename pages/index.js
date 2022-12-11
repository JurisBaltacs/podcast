import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import EpisodeComponent from "../components/EpisodeComponent";
import Slider from "../components/Slider";
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const episodes = await prisma.episode.findMany();
  return {
    props: { episodes },
  };
}

const HomeScreen = ({ episodes }) => {
  const [episodeNo, setEpisodeNo] = useState(6);
  const loadMore = () => {
    setEpisodeNo(episodeNo + 9);
  };
  return (
    <div className="w-[80%] mx-auto">
      <div className="hidden md:block">
        <Slider episodes={episodes} />
      </div>
      <div>Recent episodes</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3">
        {episodes.slice(0, episodeNo).map((episode, index) => {
          return (
            <EpisodeComponent
              key={index}
              episode={episode}
              description={episode.description}
            />
          );
        })}
      </div>
      {episodes.length > episodeNo ? (
        <button
          className="bg-grey3 rounded-md h-10 w-32 font-bold 
          border-none text-grey2 text-14 mx-auto block my-8 transition ease-in-out
          hover:bg-orange1 hover:text-white"
          onClick={() => loadMore()}
        >
          IELĀDĒT VĒL
        </button>
      ) : (
        <div>Tu esi ticis līdz sēriju saraksta beigām. Dabon dzīvi.</div>
      )}
    </div>
  );
};

export default HomeScreen;
