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
            <Dropdown.Item href={`/profile/${user.username}`}>Profile</Dropdown.Item>
            <Dropdown.Item href="/profile/edit">Edit</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <Navbar.Link className="text-lg" href="/bookmarks">Bookmarks</Navbar.Link>
          <Navbar.Link className="text-lg" href="/search">Search</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}