import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import UserMenu from '../UserMenu/UserMenu'

export default function NavBar({ user, setUser }) {
  function showOptions() {
    const userOption = document.getElementById("user-options");
    userOption.classList.toggle("active");
  };

  return (
    <nav>
        <div id="menu">
            <div id="logo">
              <Link to="/">
                Timely Tips
              </Link>
            </div>
            <div id="nav-links">
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/search">Search</Link>
            </div>
        </div>
        <div id="user-profile" onClick={showOptions} >
          { user ? 
            <>
              <img className="profile-picture" src={`${user.profilePicture}`} />
              <div id="user-options">
                <UserMenu user={user} setUser={setUser} />
              </div>
            </>
            :
            null
          }  
        </div>
    </nav>
  )
}