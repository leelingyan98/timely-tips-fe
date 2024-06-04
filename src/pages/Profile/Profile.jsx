import { useState } from 'react'
import ProfileFollowers from '../ProfileFollowers/ProfileFollowers'
import ProfileFollowings from '../ProfileFollowings/ProfileFollowings'

export default function Profile() {
  return (
    <>
      <div>
        <p>Profile Page</p>
        <ProfileFollowers />
        <ProfileFollowings />
      </div>
    </>
  )
}