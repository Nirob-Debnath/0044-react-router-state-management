import React from 'react';
import NavLink from './NavLink';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About Us",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
];

const NavbarTop = () => {
    return (
        <nav>
          <ul className='flex'>
            {
                navigationData.map(route => <NavLink key={route.id} route={route}></NavLink>)
            }
          </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li><a href={route.path}></a>{route.name}</li>)
                }
            </ul> */}
        </nav>
    );
};

export default NavbarTop;