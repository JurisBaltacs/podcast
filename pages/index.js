import React, { useEffect, useState, useContext } from "react";
import EpisodeComponent from "../components/EpisodeComponent";
import LinearProgress from "../components/ActivityIndicator";
import Layout from "../components/Layout";
import ShopContext from "../context/ShopContext";
import Slider from "../components/Slider";

const HomeScreen = () => {
  const { isLoading, setLoading } = useContext(ShopContext);
  const [data, setData] = useState([]);
  const [episodeNo, setEpisodeNo] = useState(6);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/episodes");
        const json = await response.json();

        console.log(json);
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  // const responseBody = data.body || [];
  const episodes = data?.items || [];

  // console.log(episodes);

  const loadMore = () => {
    setEpisodeNo(episodeNo + 6);
  };

  return (
    <Layout>
      <div className="homeScreen__wrapper">
        {isLoading ? (
          <LinearProgress />
        ) : (
          <div>
            <div className="slider__wrapper">
              <div>
                <Slider episodes={episodes}>
                  {/* <Slider {...settings}> */}
                  {episodes.slice(10, 12).map((episode) => {
                    return (
                      <EpisodeComponent key={episode.id} episode={episode} />
                    );
                  })}
                </Slider>
              </div>
            </div>
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
    </Layout>
  );
};

export default HomeScreen;
