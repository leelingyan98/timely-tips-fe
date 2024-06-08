import { useState } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import './Home.css';

export default function Home({ user }) {
  const [filterPost, setFilterPost] = useState('recent');

  function changeFilter(evt) {
    if (evt.target.id === "recent") {
      setFilterPost("recent");
      document.getElementById('following').classList.remove("active");
      evt.target.classList.add("active");
    } else {
      setFilterPost("following")
      document.getElementById('recent').classList.remove("active")
      evt.target.classList.add("active");
    }
  }
  return (
    <div>
      <CreatePostForm />
      <p>
        <span className="active" id="recent" onClick={changeFilter}>Recent</span>
        &nbsp;|&nbsp;
        <span id="following" onClick={changeFilter}>Following</span></p>
      { filterPost === 'recent' ?
        <>
          {"Recent"} <Post />
        </>
        :
        <>
          {"Following"} <Post />
        </>
      }
    </div>
  )
}
