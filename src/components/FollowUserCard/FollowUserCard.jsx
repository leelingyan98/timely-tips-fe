import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as usersAPI from '../../utilities/users-api.js';
import UserSearchCard from '../UserSearchCard/UserSearchCard.jsx';

export default function FollowUserCard({ userId }) {
  const [cardUser, setCardUser] = useState({});

  useEffect(() => {
    const getCardUser = async () => {
      const userResult = await usersAPI.findByUserId(userId);
      setCardUser(userResult);
    }
    getCardUser();
  }, [])

  return (
    <>
      <Link to={`/profile/${cardUser.username}`}>
        <UserSearchCard userResult={cardUser} />
      </Link>
    </>
  )
}