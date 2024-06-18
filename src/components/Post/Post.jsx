import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import * as usersAPI from '../../utilities/users-api.js';
import * as commentsAPI from '../../utilities/comments-api.js';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
import CommentCard from '../../components/CommentCard/CommentCard';
import { formatTimeAgo } from "../../utilities/common.js";

export default function Post({ user, postData, singlePost }) {
  const [postUser, setPostUser] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const userData = await usersAPI.findByUserId(postData.user);
      setPostUser(userData);

      const commentsData = await commentsAPI.findByPostId(postData._id);
      setComments(commentsData);
    }
    getPostData();
  }, [postData])

  return (
    <>
      <div className="post-container">
        <div className="top-row">
          <div className="post-creator">
            {postUser ?
              <>
                <div className="display-picture">
                  <img src={`${postUser.profilePicture}`} />
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
          <div className="actions">
            <button>xx Like</button>
            <button>Save</button>
            <button>...</button>
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
              <button><Link to={`/post/${postData._id}`}>View Post</Link></button>
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