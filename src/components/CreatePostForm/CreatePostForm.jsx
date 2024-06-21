import React, { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import { Textarea } from "flowbite-react";
import { useNavigate } from 'react-router';

export default function CreatePostForm({ user }) {
  const [postDetails, setPostDetails] = useState({ userid: user._id, content: '', files: null });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(evt) {
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
      navigate(0);
    } catch (error) {
      setError("Failed to create post");
      console.error('Error creating post:', error.message);
    }
  }

  return (
    <div className="form-container justify-self-center">
      <h2>Share your tip..</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Textarea
          id="content" name="content"
          placeholder="Start writing your tip here! i.e. Here are 5 ways you can save money:"
          rows={4} cols={100} maxLength={300}
          value={postDetails.content} onChange={handleChange}
          required
        />
        <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="photo">
          Upload a photo {"(optional)"}
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
        <div className="bottom-row mt-2">
          <p>{postDetails.content.length}/300 characters</p>
          <button type="submit">Post</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}