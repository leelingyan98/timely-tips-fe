import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Following from '../Following/Following';
import Bookmarks from '../Bookmarks/Bookmarks';
import Comments from '../Comments/Comments';
import Profile from '../Profile/Profile'
import SinglePost from '../SinglePost/SinglePost'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/following" element={<Following />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/profile/:handle" element={<Profile />} />
            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App