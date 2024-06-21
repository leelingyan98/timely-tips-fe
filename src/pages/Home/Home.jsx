import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import './Home.css';
import * as usersAPI from '../../utilities/users-api.js';
import * as postsAPI from '../../utilities/posts-api.js';

export default function Home({ user, setUser }) {
  const [filterPost, setFilterPost] = useState('recent');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      setUser(userData);
    }
    getAllUserData();
    getAllPosts();
  }, [])

  async function getAllPosts() {
    const postsData = await postsAPI.findAllPosts();
    setPosts(postsData);
  }

  async function getFollowingsPosts() {
    const postsData = await postsAPI.findByFollowings();
    setPosts(postsData);
  }

  function changeFilter(evt) {
    if (evt.target.id === "recent") {
      setFilterPost("recent");
      document.getElementById('following').classList.remove("active");
      evt.target.classList.add("active");
      getAllPosts();
      console.log('recent', filterPost)
    } else {
      setFilterPost("following")
      document.getElementById('recent').classList.remove("active")
      evt.target.classList.add("active");
      getFollowingsPosts();
      console.log('follow', filterPost)
    }
  }

  return (
    <div>
      <CreatePostForm user={user} />
      <div className="filter-tabs mb-5">
        <button className="active" id="recent" onClick={changeFilter}>Recent</button>
        <button id="following" onClick={changeFilter}>Following</button>
      </div>
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
        <>
        { filterPost === 'recent' ?
            <p>No tips yet. Start sharing!</p>
          :
          <>
            <p>You're not following anyone, or there are no tips yet. Start sharing!</p>
          </>
        }
        </>
      }
    </div>
  )
}
