import React from "react";
import Link from "next/link";

const EpisodeComponent = ({ episode, description }) => {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
  };

  return (
    <div>
      <Link href={"episode/" + episode.id}>
        <div className="relative ">
          <div className=" flex bg-orange1 rounded-md text-white w-16 justify-center text-xs absolute bottom-4 left-[50%] transform -translate-x-1/2 z-10 transition-all duration-300 hover:bg-black1">
            {millisToMinutesAndSeconds(episode.duration_ms)}
          </div>
          <img
            className="w-[300px] rounded-md mx-auto block transition-all duration-300 hover:brightness-75"
            src={episode.image}
          />
        </div>
        <div className="mt-2 py-0 px-3">
          <div className="font-bold text-black1 mt-3 text-lg line-clamp-2">
            {episode.name.replace("| Podkāsts Svarīgās detaļas", "")}
          </div>
          <div className="text-black1 text-base mt-1 line-clamp-2">
            {description?.slice(0, 150)}
          </div>
          <div className="text-grey4 text-xs">
            <div className="flex items-center">
              <div className="flex text-orange1 font-bold text-base">
                • &nbsp;
              </div>
              {episode.release_date}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EpisodeComponent;
