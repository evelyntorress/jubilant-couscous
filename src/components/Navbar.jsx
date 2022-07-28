import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="navList fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ff6b6b] text-gray-100">
      
        {/* Menu */}
        <ul className="hidden md:flex text-lg">
          <li>
          <Link to='home' smooth={true} duration={500}>
          /home
          </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
          /about
          </Link></li>
          <li>
          <Link to='skills' smooth={true} duration={500}>
          /skills
          </Link></li>
          <li>
          <Link to='work' smooth={true} duration={500}>
            /work
          </Link>
        </li>
          <li>
          <Link to='contact' smooth={true} duration={500}>
            /contact
          </Link>
          </li>
        </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ?<FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul 
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#dd8585] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          /home
          </Link></li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          /about
          </Link></li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          /skills
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            /work
          </Link></li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            /contact
          </Link></li>
      </ul>
     
    </div>
  );
};

export default Navbar;
