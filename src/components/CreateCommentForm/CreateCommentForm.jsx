import { useState } from 'react';
import * as commentsAPI from '../../utilities/comments-api.js';
import { Textarea } from "flowbite-react";

export default function CreateCommentForm({ postObj }) {
  const [commentDetails, setCommentDetails] = useState({content: "", postId: postObj});
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCommentDetails({
      ...commentDetails,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      commentsAPI.createComment(commentDetails);
      setCommentDetails({content: "", postId: postObj});
      window.location.reload();
    } catch (error) {
      setError("Failed to create comment");
    }
  }

  return (
    <div className="form-container my-5">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Textarea
          id="content" name="content"
          placeholder="Leave a comment..."
          rows={4} cols={100} maxLength={300}
          value={commentDetails.content} onChange={handleChange}
          required
        />
        <div className="bottom-row mt-2">
          <p>{commentDetails.content.length}/300 characters</p>
          <button type="submit">Comment</button>
        </div>
      </form>
    </div>
  )
}