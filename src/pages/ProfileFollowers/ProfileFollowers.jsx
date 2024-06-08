import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';

export default function ProfileFollowers() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <p>
      <Link to={`/profile/${user.username}/following`}>Following</Link>
        &nbsp;|&nbsp;
        <strong>Followers</strong>
      </p>
      <div>
        <p>Profile Followers Page</p>
      </div>
    </>
  )
}