import * as postsAPI from '../../utilities/posts-api.js';
import { BookmarkIcon as BookmarkedIcon } from "@heroicons/react/24/solid"
import { BookmarkIcon } from "@heroicons/react/24/outline"

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
            <div className="cursor-pointer px-1" onClick={handleRemoveBookmark}>
              <BookmarkedIcon className="h-6 w-6 text-primarydark hover:text-primary" />
            </div>
            :
            <div className="cursor-pointer px-1" onClick={handleBookmark}>
              <BookmarkIcon className="h-6 w-6 hover:text-gray-500" />
            </div>
          }
        </>
    )
}

