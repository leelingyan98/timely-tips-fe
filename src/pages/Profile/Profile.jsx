import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';
import Post from '../../components/Post/Post.jsx';
import './Profile.css';
import * as usersAPI from '../../utilities/users-api.js';
import * as postsAPI from '../../utilities/posts-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';

export default function Profile() {
  const [profileUser, setProfileUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { handle } = useParams();

  useEffect(() => {
    const getProfileData = async () => {
      const data = await usersAPI.findByUsername(handle);
      const posts = await postsAPI.findByUsername(handle);
      setPosts(posts);
      setProfileUser(data);
    }
    getProfileData();
  }, [])

  return (
    <>
      <BackButton />
      {profileUser ?
        <div className="profile-container">
          <div className="about">
            <div className="profile-picture">
              <img src="https://placehold.co/64x64.png" />
            </div>
            <div className="profile-details">
              <h2>{`@${profileUser.username}`}</h2>
              {profileUser.displayName ?
                <p>{profileUser.displayName}</p>
                : <p>Display Name</p>
              }
              <p>
                <Link to={`/profile/${profileUser.username}/following`}>xxx Following</Link>
                &nbsp;|&nbsp;
                <Link to={`/profile/${profileUser.username}/followers`}>xxx Followers</Link>
              </p>
              <p>xxx tips shared</p>
              <p></p>
            </div>
          </div>
          <div className="posts">
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
        </div>
        :
        <p>Loading...</p>
      }
    </>
  )
}