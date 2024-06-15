import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';
import Post from '../../components/Post/Post.jsx';
import './Profile.css';
import * as usersAPI from '../../utilities/users-api.js';
import * as postsAPI from '../../utilities/posts-api.js';
import * as followingsAPI from '../../utilities/followings-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';

export default function Profile() {
  const [user, setUser] = useState(getUser());
  const [profileUser, setProfileUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { handle } = useParams();
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [validateFollow, setValidateFollow] = useState({ isUser: false, isFollow: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const getFollows = async () => {
      const followings = await followingsAPI.findByFollowingUser(profileUser._id);
      setFollowings(followings);

      const followers = await followingsAPI.findByTargetUser(profileUser._id);
      setFollowers(followers);

      console.log('followings', followings, 'followers', followers)
    };

    const checkFollowing = async () => {
      const checkIsUser = await user._id === profileUser._id;
      console.log('check is user', checkIsUser)
      if (!checkIsUser) {
        const data = await followingsAPI.findByUsers(profileUser._id);
        console.log('check data', data)
        if (data.length > 0) {
          setValidateFollow({...validateFollow, isFollow: true })
        }
        return;
      }
      
      setValidateFollow({...validateFollow, isUser: true});
    }

    checkFollowing();
    getFollows();
  }, [profileUser])

  useEffect(() => {
    const getProfileData = async () => {
      const data = await usersAPI.findByUsername(handle);
      setProfileUser(data);

      const posts = await postsAPI.findByUsername(handle);
      setPosts(posts);
    }

    getProfileData();
  }, [])

  function handleFollow() {
    try {
      followingsAPI.createFollowing(profileUser._id);
      setValidateFollow({...validateFollow, isFollow: true })
    } catch (error) {
      setError("Could not follow user");
    }
  }

  function handleUnfollow() {
    try {
      followingsAPI.removeFollowing(profileUser._id);
      setValidateFollow({...validateFollow, isFollow: false })
    } catch (error) {
      setError("Could not unfollow user");
    }
  }

  return (
    <>
      <BackButton />
      {profileUser ?
        <div className="profile-container">
          <div className="about">
            <div className="profile-picture">
              <img src={`${profileUser.profilePicture}`} />
            </div>
            <div className="profile-details">
              <h2>{`@${profileUser.username}`}</h2>
              {profileUser.displayName ?
                <p>{profileUser.displayName}</p>
                : null
              }
              <p>
                <Link to={`/profile/${profileUser.username}/following`}>{followings.length} Following</Link>
                &nbsp;|&nbsp;
                <Link to={`/profile/${profileUser.username}/followers`}>{followers.length} Followers</Link>
              </p>
              <p>{posts.length} tips shared</p>
              { validateFollow.isUser ?
                <button>Edit profile</button>
              : 
              <>
                { validateFollow.isFollow ?
                <button onClick={handleUnfollow}>Unfollow</button>
                :
                <button onClick={handleFollow}>Follow</button>
                }
              </>
              }
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