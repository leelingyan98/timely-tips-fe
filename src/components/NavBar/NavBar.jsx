import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react'
import './NavBar.css'
import { logOut } from "../../utilities/users-service";
import DropdownLinkItem from "../../assets/flowbite-custom/DropdownLinkItem";
import NavbarLinkItem from "../../assets/flowbite-custom/NavbarLinkItem";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <Navbar className="bg-primarylight dark:bg-primarydark z-50" fluid rounded>
      <Navbar.Brand href="/" className="text-primary hover:text-primarydark">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Timely Tips</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={`${user.profilePicture.url}`} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{`@${user.username}`}</span>
          </Dropdown.Header>
            <DropdownLinkItem to={`/profile/${user.username}`}>Profile</DropdownLinkItem>
            <DropdownLinkItem to="/profile/edit">Settings</DropdownLinkItem>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <NavbarLinkItem className="text-lg text-primary hover:text-primarydark" to="/bookmarks">Bookmarks</NavbarLinkItem>
          <NavbarLinkItem className="text-lg text-primary hover:text-primarydark" to="/search">Search</NavbarLinkItem>
      </Navbar.Collapse>
    </Navbar>
  )
}