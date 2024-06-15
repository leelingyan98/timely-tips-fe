import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';

export default function ProfileFollowers() {
  const { handle } = useParams();
  const [user, setUser] = useState(getUser());

  return (
    <>
      <Link to={`/profile/${handle}`}>Back to profile</Link>
      <p>
      <Link to={`/profile/${handle}/following`}>Following</Link>
        &nbsp;|&nbsp;
        <strong>Followers</strong>
      </p>
      <div>
        <p>Profile Followers Page</p>
      </div>
    </>
  )
}