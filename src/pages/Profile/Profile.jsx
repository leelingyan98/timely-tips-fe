import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service.js';
import Post from '../../components/Post/Post.jsx';
import './Profile.css';
import * as usersAPI from '../../utilities/users-api.js';
import * as postsAPI from '../../utilities/posts-api.js';
import * as followingsAPI from '../../utilities/followings-api.js';
import BackButton from '../../components/BackButton/BackButton.jsx';

export default function Profile({ user, setUser }) {
  const [profileUser, setProfileUser] = useState();
  const [posts, setPosts] = useState([]);
  const { handle } = useParams();
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [validateFollow, setValidateFollow] = useState({ isUser: false, isFollow: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const getProfileData = async () => {
      let profileUserId = "";

      if (user.username === handle) {
        const thisProfileUser = await usersAPI.findByUserId(user._id);
        setProfileUser(thisProfileUser);
        profileUserId = thisProfileUser._id;
      } else {
        const thisProfileUser = await usersAPI.findByUsername(handle);
        setProfileUser(thisProfileUser);
        profileUserId = thisProfileUser._id;
      }
      
      checkFollowing(profileUserId);
      getFollows(profileUserId);

      const posts = await postsAPI.findByUsername(handle);
      setPosts(posts);
    }

    const getAllUserData = async () => {
      const userData = await usersAPI.findByUserId(user._id);
      console.log('userData', userData)
      setUser(userData);
    }

    getProfileData();
    getAllUserData();
  }, [handle])

  const getFollows = async (profileUserId) => {
    const followings = await followingsAPI.findByFollowingUser(profileUserId);
    setFollowings(followings);

    const followers = await followingsAPI.findByTargetUser(profileUserId);
    setFollowers(followers);
  };

  const checkFollowing = async (profileUserId) => {
    const checkIsUser = await user._id === profileUserId;
    console.log('check is user', checkIsUser)
    if (!checkIsUser) {
      const following = await followingsAPI.findByUsers(profileUserId);
      console.log('check data', following)
      if (following) {
        setValidateFollow({...validateFollow, isFollow: true })
      }
      return;
    }
    
    setValidateFollow({...validateFollow, isUser: true});
  }

  function handleFollow() {
    try {
      followingsAPI.createFollowing({targetUser: profileUser._id});
      getFollows(profileUser._id);
      setValidateFollow({...validateFollow, isFollow: true })
    } catch (error) {
      setError("Could not follow user");
    }
  }

  function handleUnfollow() {
    try {
      followingsAPI.removeFollowing({targetUser: profileUser._id});
      getFollows(profileUser._id);
      setValidateFollow({...validateFollow, isFollow: false })
    } catch (error) {
      setError("Could not unfollow user");
    }
  }

  return (
    <>
      <div className="justify-self-stretch">
        <BackButton />
      </div>
      {profileUser ?
        <div className="profile-container">
          <div className="about">
            <div className="profile-picture">
              <img src={`${profileUser.profilePicture.url}`} />
            </div>
            <div className="profile-details">
              <p>
                <span className="text-xl font-bold">{`@${profileUser.username}`}</span>
                {profileUser.displayName ?
                <span> {profileUser.displayName}</span>
                : null
                }
              </p>
              <p>
                <Link to={`/profile/${profileUser.username}/following`}>{followings.length} Following</Link>
                &nbsp;|&nbsp;
                <Link to={`/profile/${profileUser.username}/followers`}>{followers.length} Followers</Link>
              </p>
              <p>{posts.length} {"tip(s)"} shared</p>
              { validateFollow.isUser ?
                <Link to={`/profile/edit`}><button>Edit profile</button></Link>
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
                      user={user}
                      setUser={setUser}
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