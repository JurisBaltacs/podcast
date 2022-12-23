import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import LinearProgress from "./ActivityIndicator";

const CommentFormComponent = ({ uniqueEpisode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    axios
      .post("/api/add-comment", {
        name: name,
        body: comment,
        episode_id: uniqueEpisode.id,
      })
      .then(function (response) {
        router.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(true);
  };
  return (
    <div>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
            <input
              className="placeholder-grey4 focus:placeholder-opacity-0 rounded-t-lg w-full border-b-1 border-t-0 border-r-0 border-l-0 text-grey1 border-b-gray-200"
              type="text"
              name="name"
              value={name}
              // #TODO: required atribūts nestrādā. Salabot.
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Vārds"
            />
            <div className="px-4 py-2 bg-white placeholder-grey4 focus:placeholder-opacity-0">
              <textarea
                rows="3"
                className="w-full px-0 text-sm placeholder-grey4 focus:placeholder-opacity-0 text-grey1 bg-white border-0 focus:ring-0 min-h-[40px]"
                placeholder="Vieta komentāram"
                // #TODO: required atribūts nestrādā. Salabot.
                required
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <button
                onClick={() => {
                  handleSubmit();
                }}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-grey5 rounded-lg focus:ring-4   hover:bg-orange1 transition ease-in-out"
              >
                Komentēt
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentFormComponent;
