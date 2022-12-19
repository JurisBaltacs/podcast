import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import LinearProgress from "../../components/ActivityIndicator";
import { PrismaClient } from "@prisma/client";
import ReactAudioPlayer from "react-audio-player";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import Youtube from "../../assets/youtube";
// import CommentFormComponent from "../../components/CommentFormComponent";

const prisma = new PrismaClient();
export async function getServerSideProps(context) {
  // #TODO: findMany() noderēs pie static props
  // const episodes = await prisma.episode.findMany();

  const { params } = context;

  const uniqueEpisode = await prisma.episode.findUnique({
    where: { id: Number(params.id) },
  });
  const comments = await prisma.comment.findMany({
    where: {
      episode_id: Number(params.id),
    },
  });

  return {
    props: {
      uniqueEpisode,
      comments: JSON.parse(JSON.stringify(comments)),
    },
  };
}

const EpisodePage = ({ uniqueEpisode, comments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const router = useRouter();
  const episodeId = uniqueEpisode.id;

  const handleSubmit = (name, comment, episode_id) => {
    axios
      .post("/api/add-comment", {
        name: name,
        body: comment,
        episode_id: episode_id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-[80%]">
        {isLoading ? (
          <LinearProgress />
        ) : (
          <div>
            <div className="float-right pl-6">
              <img className="rounded-lg w-[300px]" src={uniqueEpisode.image} />
              <ReactAudioPlayer
                src={uniqueEpisode.audio_preview_url}
                controls
                className="background: red"
              />
            </div>

            <div className="text-3xl font-bold mb-8">{uniqueEpisode.name}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: uniqueEpisode.html_description,
              }}
            ></div>

            <br />
            <div className="mb-4">Baudi un dalies!</div>
            <div className="flex space-x-4">
              <Facebook />
              <Twitter />
              <Youtube />
            </div>
            <br />
            <div>
              <div className="text-2xl font-bold mb-8">Komentāri</div>
              <form
                onSubmit={() => {
                  handleSubmit(name, comment, episodeId);
                  router.reload();
                }}
              >
                <label>
                  Vārds:
                  <input
                    className="placeholder-grey4 focus:placeholder-opacity-0"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Vārds"
                  />
                </label>
                <label>
                  Komentārs:
                  <input
                    className="placeholder-grey4 focus:placeholder-opacity-0"
                    type="text"
                    name="body"
                    value={comment}
                    placeholder="Tavs komentārs"
                    onChange={handleCommentChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <div>
                {comments.map((comment) => {
                  return comment.body;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodePage;
