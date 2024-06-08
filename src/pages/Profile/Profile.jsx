import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';
import Post from '../../components/Post/Post.jsx';
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="profile-container">
      <div className="about">
        <div className="profile-picture">
          <img src="https://placehold.co/64x64.png" />
        </div>
        <div className="profile-details">
          <h2>{`@${user.username}`}</h2>
          { user.displayName ?
            <p>{user.displayName}</p>
            : <p>Display Name</p>
          }
          <p>
            <Link to={`/profile/${user.username}/following`}>xxx Following</Link>
            &nbsp;|&nbsp;
            <Link to={`/profile/${user.username}/followers`}>xxx Followers</Link>
          </p>
          <p>xxx tips shared</p>
          <p></p>
        </div>
      </div>
      <div className="posts">
        <Post />
      </div>
    </div>
  )
}