import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import * as usersAPI from '../../utilities/users-api.js';
import * as commentsAPI from '../../utilities/comments-api.js';
import * as postLikesAPI from '../../utilities/post-likes-api.js';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentCard from '../../components/CommentCard/CommentCard';
import { formatTimeAgo } from "../../utilities/common.js";
import Bookmark from '../Bookmark/Bookmark.jsx';
import PostLike from '../PostLike/PostLike.jsx';
import MoreActions from '../MoreActions/MoreActions.jsx';
import UpdateContentForm from '../UpdateContentForm/UpdateContentForm.jsx';

export default function Post({ user, setUser, postData, singlePost }) {
  const [postUser, setPostUser] = useState();
  const [comments, setComments] = useState();
  const [currentPost, setCurrentPost] = useState(postData);
  const [postLikes, setPostLikes] = useState();
  const [editMode, setEditMode] = useState(false);
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

      await fetchPostLikes(postData._id);
    }
    getPostData();

    // Define post actions
    const postBookmarked = user.bookmarks.includes(postData._id);
    const postOwner = user._id === postData.user;

    setValidateActions({
      ...validateActions,
      bookmarked: postBookmarked,
      owner: postOwner,
    });
  }, [postData])

  useEffect(() => {
    if (postLikes) {
      for (let i = 0; i < postLikes.length; i++) {
        const postLike = postLikes[i];
        if (postLike.user === user._id) {
          setValidateActions({
            ...validateActions,
            liked: true,
          });
          return;
        }
      }
    }
  }, [postLikes])

  async function fetchPostLikes(currentPostId) {
    const newLikes = await postLikesAPI.findByPostId(currentPostId);
    setPostLikes(newLikes);
  };

  // function refreshComment(uid) {
  //   const tempArr = comments;
  //   const index = comments.findIndex(comment => comment._id === uid);
  //   if (index !== -1) {
  //       const newComments = tempArr.splice(index, 1)[0];
  //       setComments(newComments);
  //   }
  // }

  return (
    <>
      <div className="post-container">
        <div className="top-row">
          <div className="post-creator flex">
            {postUser ?
              <>
                <div className="display-picture">
                  <img src={`${postUser.profilePicture.url}`} />
                </div>
                <div className="post-creator-name">
                  <Link to={`/profile/${postUser.username}`}>
                    <span className="handle font-bold text-lg">@{postUser.username}</span>
                  </Link>
                  {postUser.displayName ?
                    <span className="display-name text-base text-gray-600"> {postUser.displayName}</span>
                    :
                    null
                  }
                  <div className="text-sm text-gray-500">{formatTimeAgo(postData.createdAt)}</div>
                </div>
              </>
              :
              null
            }
          </div>
          <div className="flex items-start">
            <PostLike
              validateActions={validateActions}
              setValidateActions={setValidateActions}
              postId={postData._id}
              postLikes={postLikes}
            />
            <Bookmark
              setUser={setUser}
              validateActions={validateActions}
              setValidateActions={setValidateActions}
              postId={postData._id}
            />
            <MoreActions
              contentData={postData} setContent={setCurrentPost}
              type="post" validateActions={validateActions}
              editMode={editMode} setEditMode={setEditMode}
            />
          </div>
        </div>

        {editMode ?
          <UpdateContentForm
            contentData={postData} type="post"
            setEditMode={setEditMode}
            currentPost={currentPost} setContent={setCurrentPost}
          />
          :
          <p className="content my-5">
            {currentPost.content}
          </p>
        }

        {currentPost.photo ?
          <>
            <div className="photo">
              <img src={currentPost.photo.url} />
            </div>
          </>
          : null
        }

        {singlePost ?
          <>
            <CreateCommentForm postObj={postData._id} />
            <div className="bottom-row comments-count mb-3">
              {comments ? comments.length : 0} {"comment(s)"}
            </div>
            {comments ?
              <>
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <CommentCard user={user} commentData={comment} />
                  </div>
                ))}
              </>
              : null
            }
          </>
          :
          <>
            <div className="bottom-row mt-5">
              <Link to={`/post/${postData._id}`}><button>View Post</button></Link>
              <div className="comments-count">
                {comments ? comments.length : 0} {"comment(s)"}
              </div>
            </div>
          </>
        }

      </div>
    </>
  )
}