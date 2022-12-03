import React from "react";

const EpisodeComponent = ({ episode, description }) => {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
  };
  return (
    <div>
      <div className="episode__wrapper">
        <div className="duration">
          {millisToMinutesAndSeconds(episode.duration_ms)}
        </div>
        <img className="slider__picture" src={episode.images[0].url} />
      </div>
      <div className="slider__text-wrapper">
        <div className="slider__episode-name">
          {episode.name.replace("| Podkāsts Svarīgās detaļas", "")}
        </div>
        <div className="slider__episode-description">
          {description?.slice(0, 150)}
        </div>
        <div className="slider__release-date">
          <div className="slider__text-release--wrapper">
            <div className="slider__text-release">• &nbsp;</div>
            {episode.release_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeComponent;
