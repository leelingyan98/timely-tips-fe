import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import './Home.css';
import * as postsAPI from '../../utilities/posts-api.js';
import { Tabs } from "flowbite-react";

export default function Home({ user, setUser }) {
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
      console.log('recent', filterPost)
    } else {
      setFilterPost("following")
      document.getElementById('recent').classList.remove("active")
      evt.target.classList.add("active");
      console.log('follow', filterPost)
    }
  }

  return (
    <div>
      <CreatePostForm user={user} />
      <div className="filter-tabs">
        <button className="active" id="recent" onClick={changeFilter}>Recent</button>
        <button id="following" onClick={changeFilter}>Following</button>
      </div>
      { filterPost === 'recent' ?
        <>
          <h2>Recent</h2>
        </>
        :
        <>
          <h2>Following</h2>
        </>
      }
      {posts.length > 0 ?
        <>
          {posts.map((post) => (
            <div className="self-stretch w-full" key={post._id}>
              <Post
                user={user}
                setUser={setUser}
                postData={post}
                singlePost={false}
              />
            </div>
          ))}
        </>
        :
        <p>"No tips yet"</p>
      }
    </div>
  )
}
