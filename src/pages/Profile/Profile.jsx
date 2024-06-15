import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';
import Post from '../../components/Post/Post.jsx';
import './Profile.css';
import * as usersAPI from '../../utilities/users-api.js';

export default function Profile() {
  const [user, setUser] = useState(getUser());
  const [profileUser, setProfileUser] = useState({});
  const { handle } = useParams();
  
  useEffect(() => {
    const getProfileUser = async () => {
      const data = await usersAPI.findByUsername(handle);
      console.log('data', data)
      setProfileUser(data);
    }
    getProfileUser();
  }, [])

  return (
    <>
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
            <Post />
          </div>
        </div>
        :
        <p>Loading...</p>
      }
    </>
  )
}