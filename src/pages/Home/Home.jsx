import { useState } from 'react'
import Post from '../../components/Post/Post'

export default function Home() {
  return (
    <>
      <div>
        <p>Home Page</p>
        <Post />
      </div>
    </>
  )
}