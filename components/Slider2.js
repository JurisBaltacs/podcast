import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EpisodeComponent from "../components/EpisodeComponent";
// import "./styles.css";

export default ({ episodes }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
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
    },
  });

  const isSlider = !!sliderRef;

  return (
    <div className="flex">
      <Arrow
        className="fill-red"
        left
        onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
      />
      <div ref={sliderRef} className="keen-slider">
        {episodes.slice(10, 20).map((episode) => {
          return (
            <div className="keen-slider__slide" key={episode.id}>
              <EpisodeComponent episode={episode} isSlider={isSlider} />
            </div>
          );
        })}
      </div>
      <Arrow
        onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
      />
    </div>
  );
};

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className="fill-grey1 h-10 mt-[7.5%] px-4 hover:fill-orange1 cursor-pointer"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
