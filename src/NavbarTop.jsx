import React, { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';

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

    const[menuOpen, setMenuOpen] = useState(false);

    const links = navigationData.map(route => <NavLink key={route.id} route={route}></NavLink>)

    return (
        <nav className='flex justify-between mx-10 mt-4'>
          <span className='flex' onClick={() => setMenuOpen(!menuOpen)}>
            { menuOpen ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu> }
            <ul className= {`md:hidden absolute duration-1000 text-black
               ${menuOpen ? 'top-8' : '-top-40'}
               bg-amber-200`}>
              {links}
            </ul>
            <h3>My Navbar</h3>
          </span>
          <ul className='md:flex hidden '>
            {
                links
            }
          </ul>
          <button>Sign In</button>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li><a href={route.path}></a>{route.name}</li>)
                }
            </ul> */}
        </nav>
    );
};

export default NavbarTop;