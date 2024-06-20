import { getUser } from '../../utilities/users-service.js';
import * as postsAPI from '../../utilities/posts-api.js';
import { HeartIcon as LikedIcon } from "@heroicons/react/24/solid"
import { HeartIcon as LikeIcon } from "@heroicons/react/24/outline"

export default function PostLike({ setUser, validateActions, setValidateActions, postId }) {    
      function handlePostLike() {
        try {
          postsAPI.bookmark(postId);
          setUser(getUser());
          setValidateActions({...validateActions, liked: true });
        } catch (error) {
          console.error(error);
        }
      }
    
      function handleRemovePostLike() {
        try {
            postsAPI.removePostLike(postId);
            setUser(getUser())
            setValidateActions({...validateActions, liked: false });
        } catch (error) {
            console.error(error);
        }
      }

    return (
        <>
            {validateActions.liked ?
              <div className="cursor-pointer px-1" onClick={handleRemovePostLike}>
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

