import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import * as postsAPI from '../../utilities/posts-api.js';
import BackButton from '../../components/BackButton/BackButton';
import Post from '../../components/Post/Post';

export default function SinglePost() {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getPost = async() => {
      const postData = await postsAPI.findByPostId(id);
      setPost(postData);
    }
    getPost();
  }, [])

  return (
    <>
      <BackButton />
      { post ?
        <Post postData={post} singlePost={true} />
        : "Loading..."
      }
    </>
  )
}
