import { useState } from 'react'
import Post from '../../components/Post/Post'

export default function Bookmarks({ user, setUser }) {
  return (
    <>
      <div>
        <p>Bookmarks Page</p>
        <Post />
      </div>
    </>
  )
}
