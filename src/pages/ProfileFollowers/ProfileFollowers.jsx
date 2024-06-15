import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findByTargetUsername } from '../../utilities/followings-api.js';

export default function ProfileFollowers() {
  const { handle } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getFollowers = async () => {
      const data = await findByTargetUsername(handle);
      console.log(data)
      setFollowers(data);
    };
    getFollowers();
  }, [handle])

  return (
    <>
      <Link to={`/profile/${handle}`}>Back to profile</Link>
      <p>
      <Link to={`/profile/${handle}/following`}>Following</Link>
        &nbsp;|&nbsp;
        <strong>Followers</strong>
      </p>
      {followers.length > 0 ?
        <>
          {followers.map((follower) => (
            <div key={follower._id}>
              <FollowUserCard userId={follower.followingUser} />
            </div>
          ))}
        </>
        :
        "Not followers yet..."
      }
    </>
  )
}