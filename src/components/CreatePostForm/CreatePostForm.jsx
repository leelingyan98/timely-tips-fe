import { useState } from 'react'
import './CreatePostForm.css'
import * as postsAPI from '../../utilities/posts-api'

export default function CreatePostForm() {
  const [postDetails, setPostDetails] = useState({
    content: "", files: [],
  });
  const [validatePostForm, setValidatePostForm] = useState({});
  const [error, setError] = useState("");

  function handleChange(evt) {
    console.log('event', evt.target);

    if (evt.target.files) {
      setPostDetails({
        ...postDetails,
        files: evt.target.files[0]
      })
      console.log("post details", postDetails);
      return
    }

    setPostDetails({
      ...postDetails,
      [evt.target.name]: evt.target.value,
    });
    console.log("post details", postDetails);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      postsAPI.createPost(postDetails);
      setPostDetails({content: "", files: []});
      document.getElementById('photo').value = '';
    } catch (error) {
      setError("Failed to create post");
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
          <p>xxx/500 characters</p>
          <button className="submit-btn" type="submit">Post</button>
        </div>
      </form>
    </div>
  )
}