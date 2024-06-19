import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { getUser } from '../../utilities/users-service.js';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import ProfileFollowers from '../ProfileFollowers/ProfileFollowers'
import ProfileFollowings from '../ProfileFollowings/ProfileFollowings'
import Bookmarks from '../Bookmarks/Bookmarks';
import UserSearch from '../UserSearch/UserSearch.jsx';
import Profile from '../Profile/Profile'
import SinglePost from '../SinglePost/SinglePost'
import LoginPage from '../LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <div className="container">
        {user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/home" element={<Home user={user} setUser={setUser} />} />
              <Route path="/bookmarks" element={<Bookmarks user={user} setUser={setUser} />} />
              <Route path="/search" element={<UserSearch />} />
              <Route path="/profile/:handle" element={<Profile user={user} setUser={setUser} />} />
              <Route path="/profile/:handle/following" element={<ProfileFollowings />} />
              <Route path="/profile/:handle/followers" element={<ProfileFollowers />} />
              <Route path="/post/:id" element={<SinglePost user={user} setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </>
          :
          <LoginPage setUser={setUser} />
        }

      </div>
    </>
  )
}

export default App
