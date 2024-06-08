import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import UserMenu from '../UserMenu/UserMenu'

export default function NavBar({ user, setUser }) {
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
        <div>
            <img src="https://placehold.co/64x64.png" />
            <UserMenu user={user} setUser={setUser} />
        </div>
    </nav>
  )
}