import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { getUser } from '../../utilities/users-service.js';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import Following from '../Following/Following';
import Bookmarks from '../Bookmarks/Bookmarks';
import Comments from '../Comments/Comments';
import Profile from '../Profile/Profile'
import SinglePost from '../SinglePost/SinglePost'
import LoginPage from '../LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <div>
        <NavBar />
        <div className="container">
          { user ?
            <>
              <NavBar user={user} setUser={setUser} />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/following" element={<Following />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/profile/:handle" element={<Profile />} />
                <Route path="/post/:id" element={<SinglePost />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </>
            :
            <LoginPage setUser={setUser} />
          }
          
        </div>
      </div>
    </>
  )
}

export default App
