import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';

export default function ProfileFollowings() {
  const { handle } = useParams();
  const [user, setUser] = useState(getUser());

  return (
    <>
      <Link to={`/profile/${handle}`}>Back to profile</Link>
      <p>
        <strong>Following</strong>
        &nbsp;|&nbsp;
        <Link to={`/profile/${handle}/followers`}>Followers</Link>
      </p>
      <div>
        <p>Profile Followings Page</p>
      </div>
    </>
  )
}