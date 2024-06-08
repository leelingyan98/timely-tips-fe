import { useState } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'

export default function Home() {
  return (
    <div>
      <CreatePostForm />
      <h2>Recent tips</h2>
      <Post />
    </div>
  )
}
