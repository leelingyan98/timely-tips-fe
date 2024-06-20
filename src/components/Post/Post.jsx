import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import * as usersAPI from '../../utilities/users-api.js';
import * as commentsAPI from '../../utilities/comments-api.js';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentCard from '../../components/CommentCard/CommentCard';
import { formatTimeAgo } from "../../utilities/common.js";
import Bookmark from '../Bookmark/Bookmark.jsx';
import PostLike from '../PostLike/PostLike.jsx';
import MoreActions from '../MoreActions/MoreActions.jsx';

export default function Post({ user, setUser, postData, singlePost }) {
  const [postUser, setPostUser] = useState();
  const [comments, setComments] = useState([]);
  const [validateActions, setValidateActions] = useState({
    bookmarked: false,
    liked: false,
    owner: false,
  });

  useEffect(() => {
    const getPostData = async () => {
      const userData = await usersAPI.findByUserId(postData.user);
      setPostUser(userData);

      const commentsData = await commentsAPI.findByPostId(postData._id);
      setComments(commentsData);
    }
    getPostData();

    // Define post actions
    const postBookmarked = user.bookmarks.includes(postData._id);
    const postOwner = user._id === postData.user;
    console.log('post Owner', postOwner)
    setValidateActions({
      ...validateActions,
      bookmarked: postBookmarked,
      liked: false,
      owner: postOwner,
    });
  }, [postData])

  return (
    <>
      <div className="post-container">
        <div className="top-row">
          <div className="post-creator">
            {postUser ?
              <>
                <div className="display-picture">
                  <img src={`${postUser.profilePicture.url}`} />
                </div>
                <div className="post-creator-name">
                  {postUser.displayName ?
                    <span className="display-name">{postUser.displayName}</span>
                    :
                    null
                  }
                  <Link to={`/profile/${postUser.username}`}>
                    <span className="handle">@{postUser.username}</span>
                  </Link>
                  <div>{formatTimeAgo(postData.createdAt)}</div>
                </div>
              </>
              :
              null
            }
          </div>
          <div className="flex">
            <PostLike 
              setUser={setUser}
              validateActions={validateActions}
              setValidateActions={setValidateActions}
              postId={postData._id}
            />
            <Bookmark
              setUser={setUser}
              validateActions={validateActions}
              setValidateActions={setValidateActions}
              postId={postData._id}
            />
            <MoreActions
              validateActions={validateActions}
              postId={postData._id}
            />
          </div>
        </div>

        <p className="content">
          {postData.content}
        </p>
        <div className="photo">Post image here</div>

        {singlePost ?
          <>
            <CreateCommentForm postObj={postData._id} />
            <div className="bottom-row comments-count">
              {comments.length} comments
            </div>
            {comments.length > 0 ?
              <>
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <CommentCard commentData={comment} />
                  </div>
                ))}
              </>
              : null
            }
          </>
          :
          <>
            <div className="bottom-row">
              <Link to={`/post/${postData._id}`}><button>View Post</button></Link>
              <div className="comments-count">
              {comments.length} comments
              </div>
            </div>
          </>
        }

      </div>
    </>
  )
}