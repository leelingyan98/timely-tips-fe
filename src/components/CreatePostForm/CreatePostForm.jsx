import React, { useState } from 'react';
import './CreatePostForm.css';
import * as postsAPI from '../../utilities/posts-api';

export default function CreatePostForm({ user }) {
  const [postDetails, setPostDetails] = useState({ userid: user._id, content: '', files: null });
  const [validatePostForm, setValidatePostForm] = useState({});
  const [error, setError] = useState("");

  function handleChange(evt) {
    console.log('event', evt.target);

    if (evt.target.name === "photo") {
      setPostDetails({
        ...postDetails,
        files: evt.target.files[0],
      });
    } else {
      setPostDetails({
        ...postDetails,
        [evt.target.name]: evt.target.value,
      });
    }
    console.log("post details", postDetails);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('userid', postDetails.userid);
    formData.append('content', postDetails.content);
    if (postDetails.files) {
      formData.append('photos', postDetails.files);
    }

    try {
      await postsAPI.createPost(formData);
      setPostDetails({ userid: user._id, content: "", files: null });
      document.getElementById('photo').value = '';
    } catch (error) {
      setError("Failed to create post");
      console.error('Error creating post:', error.message);
    }
  }

return (
  <div className="form-container">
    <h2>Share your tip..</h2>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <textarea
        id="content"
        name="content"
        rows="4"
        cols="50"
        maxLength="500"
        placeholder="Type your text here..."
        value={postDetails.content}
        onChange={handleChange}
        required
      >
      </textarea>
      <div className="bottom-row">
        <label htmlFor="photo">Upload a photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
        <p>{postDetails.content.length}/500 characters</p>
        <input className="submit-btn" type="submit" value="Post" />
      </div>
    </form>
    {error && <p className="error-message">{error}</p>}
  </div>
)
}