import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FollowUserCard({ userId }) {
  return (
    <>
      <Link to={`/profile/${username}`}>
        <div className="user-card">
          <div className="profile-picture">
            <img src="" />
          </div>
          <div className="user-info">
            <p>@{username}</p>
            <p>{displayName}</p>
          </div>
        </div>
      </Link>
    </>
  )
}