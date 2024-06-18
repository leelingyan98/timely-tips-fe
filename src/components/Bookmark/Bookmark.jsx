import { getUser } from '../../utilities/users-service.js';
import * as postsAPI from '../../utilities/posts-api.js';

export default function Bookmark({ setUser, validateActions, setValidateActions, postId }) {    
      function handleBookmark() {
        try {
          postsAPI.bookmark(postId);
          setUser(getUser());
          setValidateActions({...validateActions, bookmarked: true });
        } catch (error) {
          console.error(error);
        }
      }
    
      function handleRemoveBookmark() {
        try {
            postsAPI.removeBookmark(postId);
            setUser(getUser())
            setValidateActions({...validateActions, bookmarked: false });
        } catch (error) {
            console.error(error);
        }
      }

    return (
        <>
            {validateActions.bookmarked ?
            <button onClick={handleRemoveBookmark}>Unsave</button>
            :
            <button onClick={handleBookmark}>Save</button>
            }
        </>
    )
}

