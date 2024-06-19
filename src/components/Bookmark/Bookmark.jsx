import * as postsAPI from '../../utilities/posts-api.js';

export default function Bookmark({ validateActions, setValidateActions, postId }) {    
      function handleBookmark() {
        try {
          postsAPI.bookmark(postId);
          setValidateActions({...validateActions, bookmarked: true });
        } catch (error) {
          console.error(error);
        }
      }
    
      function handleRemoveBookmark() {
        try {
            postsAPI.removeBookmark(postId);
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

