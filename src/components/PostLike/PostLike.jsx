import { getUser } from '../../utilities/users-service.js';
import * as postLikesAPI from '../../utilities/post-likes-api.js';
import { HeartIcon as LikedIcon } from "@heroicons/react/24/solid"
import { HeartIcon as LikeIcon } from "@heroicons/react/24/outline"

export default function PostLike(props) {
  const {
    validateActions, setValidateActions,
    postId,
    postLikes, fetchPostLikes,
  } = props;

  function handlePostLike() {
    postLikesAPI.createLike({ postid: postId });
    setValidateActions({ ...validateActions, liked: true });
    fetchPostLikes(postId);
  }

  function handleRemovePostLike() {
    postLikesAPI.removeLike({ postid: postId });
    setValidateActions({ ...validateActions, liked: false });
    fetchPostLikes(postId);
  }

  return (
    <>
      {postLikes ?
        postLikes.length
        : null
      }
      {validateActions.liked ?
        <div className="cursor-pointer px-1 flex" onClick={handleRemovePostLike}>
          <LikedIcon className="h-6 w-6" />
        </div>
        :
        <div className="cursor-pointer px-1" onClick={handlePostLike}>
          <LikeIcon className="h-6 w-6" />
        </div>
      }
    </>
  )
}

