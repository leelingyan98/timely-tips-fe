import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
        <div id="menu">
            <div id="logo">
              <Link to="/">
                Timely Tips
              </Link>
            </div>
            <div id="nav-links">
                <Link to="/following">Following</Link>
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/comments">Comments</Link>
            </div>
        </div>
        <div>
            <img src="https://placehold.co/64x64.png" />
        </div>
    </nav>
  )
}