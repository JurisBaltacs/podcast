import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EpisodeComponent from "../components/EpisodeComponent";

const Slider = ({ episodes }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },

    breakpoints: {
      "(max-width: 1400px)": {
        slides: {
          perView: 4,
        },
      },
      "(max-width: 1200px)": {
        slides: {
          perView: 3,
        },
      },
      "(max-width: 1080px)": {
        slides: {
          perView: 2,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {episodes.slice(10, 20).map((episode) => {
        return (
          <div className="keen-slider__slide">
            <EpisodeComponent key={episode.id} episode={episode} />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
