import { useEffect, useState } from "react";
import * as postLikesAPI from '../../utilities/post-likes-api.js';
import { HeartIcon as LikedIcon } from "@heroicons/react/24/solid"
import { HeartIcon as LikeIcon } from "@heroicons/react/24/outline"

export default function PostLike(props) {
  const {
    validateActions, setValidateActions,
    postId, postLikes,
  } = props;
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (postLikes) {
      setLikeCount(postLikes.length);
    }
  }, [postLikes])


  function handlePostLike() {
    postLikesAPI.createLike({ postid: postId });
    setValidateActions({ ...validateActions, liked: true });
    setLikeCount(likeCount + 1);
  }

  function handleRemovePostLike() {
    postLikesAPI.removeLike({ postid: postId });
    setValidateActions({ ...validateActions, liked: false });
    setLikeCount(likeCount - 1);
  }

  return (
    <>
      {likeCount}
      {validateActions.liked ?
        <div className="cursor-pointer px-1" onClick={handleRemovePostLike}>
          <LikedIcon className="h-6 w-6 text-secondarydark hover:text-secondary" />
        </div>
        :
        <div className="cursor-pointer px-1" onClick={handlePostLike}>
          <LikeIcon className="h-6 w-6 hover:text-gray-500" />
        </div>
      }
    </>
  )
}

