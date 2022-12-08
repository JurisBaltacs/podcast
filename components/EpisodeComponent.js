import React from "react";
import Link from "next/link";
import styles from "./EpisodeComponent.module.css";

const EpisodeComponent = ({ episode, description }) => {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
  };

  // console.log("episode comp", episode);
  return (
    <div>
      <Link href={"episode/" + episode.id}>
        <div className={styles.episode__wrapper}>
          <div className={styles.duration}>
            {millisToMinutesAndSeconds(episode.duration_ms)}
          </div>
          <img className={styles.episode__picture} src={episode.image} />
        </div>
        <div className={styles.slider__text_wrapper}>
          <div className={styles.slider__episode_name}>
            {episode.name.replace("| Podkāsts Svarīgās detaļas", "")}
          </div>
          <div className={styles.slider__episode_description}>
            {description?.slice(0, 150)}
          </div>
          <div className={styles.slider__release_date}>
            <div className={styles.slider__text_release_wrapper}>
              <div className={styles.slider__text_release}>• &nbsp;</div>
              {episode.release_date}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeComponent;
