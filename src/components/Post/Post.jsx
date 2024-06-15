import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import * as usersAPI from '../../utilities/users-api.js';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';

export default function Post({ postData, singlePost }) {
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const userData = await usersAPI.findByUserId(postData.user);
      setPostUser(userData);
    }
    getUser();
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
            <div className="bottom-row comments-count">
              xxx comments
            </div>
            <CreateCommentForm postObj={postData._id} />
            <div className="comments">
              <div>@handle timestamp</div>
              <div>comment content</div>
            </div>
          </>
          :
          <>
            <div className="bottom-row">
              <button><Link to={`/post/${postData._id}`}>View Post</Link></button>
              <div className="comments-count">
                xxx comments
              </div>
            </div>
          </>

        }

      </div>
    </>
  )
}