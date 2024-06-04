import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import SinglePost from '../SinglePost/SinglePost'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:handle" element={<Profile />} />
          <Route path="/" element={<SinglePost />} />
        </Routes>
      </div>
    </>
  )
}

export default App
