import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CreateCommentForm from '../../components/CreateCommentsForm/CreateCommentForm';

export default function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Navigate back to previous page
  function previousPage() {
    navigate(-1);
  };

  return (
    <>
      <div className="post-container">
        <button onClick={previousPage} >Go back</button>
        <div className="top-row">
          <div className="post-creator">
            <div className="display-picture"></div>
            <div className="post-creator-name">
              <span className="display-name">Display name</span>
              <span className="handle">@handle</span>
            </div>
          </div>
          <div className="actions">
            <button>xx Like</button>
            <button>Save</button>
            <button>...</button>
          </div>
        </div>
        <p className="content">Post text here</p>
        <div className="photo">Post image here</div>
        <div className="bottom-row comments-count">
            xxx comments
        </div>
        <CreateCommentForm postObj={id} />
        <div className="comments">
          <div>@handle timestamp</div>
          <div>comment content</div>
        </div>
      </div>
    </>
  )
}
