import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
// import Link from "next/link";
import EpisodeComponent from "../components/EpisodeComponent";
import Slider from "../components/Slider";
import styles from "./index.module.css";
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
    <div className={styles.homeScreen__wrapper}>
      <div className={styles.slider__wrapper}>
        <Slider episodes={episodes} />
      </div>
      <div>Recent episodes</div>
      <div className={styles.grid}>
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
        // <button className={styles.button__load_more} onClick={() => loadMore()}>
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
