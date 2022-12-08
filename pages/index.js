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
      
      Recent episodes
      <div className={styles.grid}>
        {episodes.slice(0, episodeNo).map((episode, index) => {
          return (
            // <Link href={"episode/1"} key={index}>
            <EpisodeComponent
              key={index}
              episode__picture={styles.grid__picture}
              episode={episode}
              description={episode.description}
            />
            // </Link>
          );
        })}
      </div>
      {episodes.length > episodeNo ? (
        // <button className={styles.button__load_more} onClick={() => loadMore()}>
        <button
          className="text-3xl font-bold underline"
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
