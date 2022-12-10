import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EpisodeComponent from "../components/EpisodeComponent";

const Slider = ({ episodes }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },

    breakpoints: {
      "(max-width: 1400px)": {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
      "(max-width: 1200px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(max-width: 1080px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {episodes.slice(10, 20).map((episode) => {
        return (
          <div className="keen-slider__slide" key={episode.id}>
            <EpisodeComponent episode={episode} />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
