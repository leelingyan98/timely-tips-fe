import { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';
import * as usersAPI from '../../utilities/users-api.js';
import * as postsAPI from '../../utilities/posts-api.js';

export default function Bookmarks({ user, setUser }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      console.log(userData);
      setUser(userData);
    }
    getAllUserData();
  }, [])

  useEffect(() => {
    const bookmarks = user.bookmarks;

    const postsArr = [];

    if (bookmarks.length > 0) {
      for (let i = 0; i < bookmarks.length; i++) {
        const bookmark = bookmarks[i];

        async function getPost(currentPostId) {
          const postData = await postsAPI.findByPostId(currentPostId);
          postsArr.push(postData);
          setPosts(postsArr);
        };
        getPost(bookmark);
      }
    }
  }, [user])

  return (
    <>
      <div>
        <h2>Your bookmarks</h2>
        {posts ?
        <>
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
          <p>No bookmarks yet</p>
          }
        </>
        : <p>No bookmarks yet</p>
      }
      </div>
    </>
  )
}
