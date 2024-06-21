import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findByTargetUsername } from '../../utilities/followings-api.js';
import FollowUserCard from '../../components/FollowUserCard/FollowUserCard.jsx';

export default function ProfileFollowers() {
  const { handle } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getFollowers = async () => {
      const data = await findByTargetUsername(handle);
      setFollowers(data);
    };
    getFollowers();
  }, [handle])

  return (
    <>
      <Link to={`/profile/${handle}`}>Back to @{handle}'s profile</Link>
      <p className="my-5">
      <Link to={`/profile/${handle}/following`}>Following</Link>
        &nbsp;|&nbsp;
        <strong>Followers</strong>
      </p>
      {followers.length > 0 ?
        <div className="user-search grid grid-cols-2">
          {followers.map((follower) => (
            <div key={follower._id}>
              <FollowUserCard userId={follower.followingUser} />
            </div>
          ))}
        </div>
        :
        "No followers yet..."
      }
    </>
  )
}