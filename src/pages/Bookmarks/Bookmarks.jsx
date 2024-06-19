import { useState } from 'react'
import Post from '../../components/Post/Post'

export default function Bookmarks({ user, setUser }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div>
        <p>Bookmarks Page</p>
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
        <p>No bookmarks</p>
      }
      </div>
    </>
  )
}
