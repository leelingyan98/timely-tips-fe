"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { logOut } from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <Navbar className="bg-primarylight dark:bg-primarydark" fluid rounded>
      <Navbar.Brand href="/" className="text-primary hover:text-primarydark">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Timely Tips</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={`${user.profilePicture}`} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{`@${user.username}`}</span>
          </Dropdown.Header>
          <Link to={`/profile/${user.username}`}>
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/bookmarks">
          <Navbar.Link className="text-lg">Bookmarks</Navbar.Link>
        </Link>
        <Link to="/search">
          <Navbar.Link className="text-lg">Search</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}