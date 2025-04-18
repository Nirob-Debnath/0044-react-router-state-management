import React from 'react';

const NavLink = ({route}) => {
    return (
        <li className='lg:mr-10 px-4 hover:bg-amber-400'>
            <a href={route.path}>{route.name}</a>
        </li>
)};

export default NavLink;