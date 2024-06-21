import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findByFollowingUsername } from '../../utilities/followings-api.js';
import FollowUserCard from '../../components/FollowUserCard/FollowUserCard.jsx';

export default function ProfileFollowings() {
  const { handle } = useParams();
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const getFollowings = async () => {
      const data = await findByFollowingUsername(handle);
      setFollowings(data);
    };
    getFollowings();
  }, [handle])

  return (
    <>
      <Link to={`/profile/${handle}`}>Back to @{handle}'s profile</Link>
      <p className="my-5">
        <strong>Following</strong>
        &nbsp;|&nbsp;
        <Link to={`/profile/${handle}/followers`}>Followers</Link>
      </p>
      {followings.length > 0 ?
        <>
          {followings.map((following) => (
            <div key={following._id}>
              <FollowUserCard userId={following.targetUser} />
            </div>
          ))}
        </>
        :
        "Not following anyone yet..."
      }
    </>
  )
}