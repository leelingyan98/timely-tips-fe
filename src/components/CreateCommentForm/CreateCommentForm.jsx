import { useState } from 'react'
import './CreateCommentForm.css'
import * as commentsAPI from '../../utilities/comments-api.js'

export default function CreateCommentForm({ postObj }) {
  const [commentDetails, setCommentDetails] = useState({content: "", postId: postObj});
  const [validateCommentForm, setValidateCommentForm] = useState({});
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCommentDetails({
      ...commentDetails,
      [evt.target.name]: evt.target.value,
    });
    console.log("comment details", commentDetails);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      commentsAPI.createComment(commentDetails);
      setCommentDetails({content: "", postId: postObj});
    } catch (error) {
      setError("Failed to create comment");
    }
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="50"
          maxLength="500"
          placeholder="Write your comment..."
          value={commentDetails.content}
          onChange={handleChange}
          required
        >
        </textarea>
        <div className="bottom-row">
          <p>{commentDetails.content.length}/500 characters</p>
          <input className="submit-btn" type="submit" value="Comment" />
        </div>
      </form>
    </div>
  )
}