import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import EpisodeComponent from "../components/EpisodeComponent";
import LinearProgress from "../components/ActivityIndicator";
import ShopContext from "../context/ShopContext";

const HomeScreen = () => {
  const { isLoading, setLoading } = useContext(ShopContext);
  const [data, setData] = useState([]);
  const [episodeNo, setEpisodeNo] = useState(6);
  useEffect(() => {
    const url = "http://localhost:8888/test";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const responseBody = data.body || [];
  const episodes = responseBody?.items || [];

  console.log(episodes);

  const loadMore = () => {
    setEpisodeNo(episodeNo + 6);
  };

  return (
    <div className="homeScreen__wrapper">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div>
        
          {/* <div className="slider__wrapper">
            <Slider {...settings}>
              {episodes.slice(10, 20).map((episode, index) => {
                return <EpisodeComponent key={index} episode={episode} />;
              })}
            </Slider>
          </div> */}
          Recent episodes
          <div className="grid">
            {episodes.slice(0, episodeNo).map((episode, index) => {
              return (
                <div>
                  <EpisodeComponent
                    key={index}
                    // #TODO: Izdomāt, kā salikt concationation, lai beidzās ar daudzpunkti
                    episode={episode}
                    description={episode.description}
                  />
                </div>
              );
            })}
          </div>
          {episodes.length > episodeNo ? (
            <button className="button__load-more" onClick={() => loadMore()}>
              SHOW MORE
            </button>
          ) : (
            <div>All episodes loaded</div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
