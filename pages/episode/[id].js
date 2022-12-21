import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactAudioPlayer from "react-audio-player";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import Youtube from "../../assets/youtube";
import CommentFormComponent from "../../components/CommentFormComponent";

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
  return (
    <div className="flex justify-center pt-10">
      <div className="w-[80%]">
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

            <div>
              <CommentFormComponent uniqueEpisode={uniqueEpisode} />
              <div className="bg-gray-50 rounded-lg">
                {comments.map((comment) => {
                  // console.log(comments);

                  const commentDate = comment.createdAt.replace(
                    /(\T.*?\Z)/gi,
                    ""
                  );
                  return (
                    <div
                      key={comment.id}
                      className="mx-2 border-b-2 last-of-type:border-b-0"
                    >
                      <div>
                        <div className="text-grey1 font-bold text-xl pt-2">
                          {comment.name}
                        </div>

                        <div className="text-xs text-grey2">{commentDate}</div>
                        <div className="mt-2 pb-1">{comment.body}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;
