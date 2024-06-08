import { useState } from 'react'
import Post from '../../components/Post/Post'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'

export default function Following() {
  return (
    <>
      <div>
        <CreatePostForm />
        <h2>Tips from people you follow</h2>
        <Post />
      </div>
    </>
  )
}
