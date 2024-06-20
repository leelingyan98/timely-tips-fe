import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';

const DropdownLinkItem = ({ to, children }) => (
    <Link to={to} className="block w-full h-full">
        <Dropdown.Item as="div">

            {children}

        </Dropdown.Item>
    </Link>
);

export default DropdownLinkItem;