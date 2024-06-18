import { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserSearchCard.css'

export default function UserSearchCard({ userResult }) {
  return (
    <>
      <Link to={`/profile/${userResult.username}`}>
        <div className="user-card">
          <div className="profile-picture">
            <img src={userResult.profilePicture} />
          </div>
          <div className="user-info">
            <p>@{userResult.username}</p>
            {userResult.displayName ?
            <p>{userResult.displayName}</p>
            : null
            }
          </div>
        </div>
      </Link>
    </>
  )
}