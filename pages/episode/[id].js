import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactAudioPlayer from "react-audio-player";
import CommentFormComponent from "../../components/CommentFormComponent";

const prisma = new PrismaClient();
export async function getServerSideProps(context) {
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
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div>
          <div className="md:float-right pl-6">
            <img className="rounded-lg w-[300px]" src={uniqueEpisode.image} />
            <div className="mx-auto">
              <ReactAudioPlayer
                src={uniqueEpisode.audio_preview_url}
                controls
              />
            </div>
          </div>

          <div className="text-3xl font-bold mb-8">{uniqueEpisode.name}</div>
          <div
            className="break-words"
            dangerouslySetInnerHTML={{
              __html: uniqueEpisode.html_description,
            }}
          ></div>
          <br />
          <div>
            <div className="text-2xl font-bold mb-8">Komentāri</div>
            <div>
              <CommentFormComponent uniqueEpisode={uniqueEpisode} />
              <div className="bg-gray-50 rounded-lg">
                {comments.map((comment) => {
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
