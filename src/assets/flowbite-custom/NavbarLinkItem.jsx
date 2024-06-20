import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

const NavbarLinkItem = ({ to, children, className }) => (
  <Link to={to} className="block w-full h-full">
    <Navbar.Link as="div" className={className}>
      {children}
    </Navbar.Link>
  </Link>
);

export default NavbarLinkItem;