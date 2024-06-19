import { getUser } from '../../utilities/users-service.js';
import * as postsAPI from '../../utilities/posts-api.js';

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
            <button onClick={handleRemovePostLike}>Unsave</button>
            :
            <button onClick={handlePostLike}>Save</button>
            }
        </>
    )
}

