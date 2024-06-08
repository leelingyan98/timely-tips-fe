import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';

export default function ProfileFollowings() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <p>
        <strong>Following</strong>
        &nbsp;|&nbsp;
        <Link to={`/profile/${user.username}/followers`}>Followers</Link>
      </p>
      <div>
        <p>Profile Followings Page</p>
      </div>
    </>
  )
}