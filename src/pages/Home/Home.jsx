import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import './Home.css';
import * as postsAPI from '../../utilities/posts-api.js';

export default function Home({ user }) {
  const [filterPost, setFilterPost] = useState('recent');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await postsAPI.findAllPosts();
      setPosts(postsData);
    }
    getPosts();
  }, [])

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
          {"Recent"}
        </>
        :
        <>
          {"Following"}
        </>
      }
      {posts.length > 0 ?
        <>
          {posts.map((post) => (
            <div key={post._id}>
              <Post
                postData={post}
                singlePost={false}
              />
            </div>
          ))}
        </>
        :
        "No tips yet"
      }
    </div>
  )
}
