import React, { useContext, useState } from 'react';
import { InfoContext } from '../context/Context';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {  easeInOut, motion } from "framer-motion";

const NavBar = () => {
  const { fullName } = useContext(InfoContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['work', 'about', 'contact'];

  return (
    <motion.div
    initial={{y:-100}}
    animate={{y:0}}
    transition={{
      delay:.4,
      duration:.5,
      transform:easeInOut
    }}
    className='backdrop-blur bg-black/30  text-white fixed top-0 left-0 w-full z-10 '>
      <div className='px-10 py-5 flex justify-between items-center'>
        
        <Link to={"/"}>
        <h1 className='text-2xl font-semibold'>{fullName}</h1>
        </Link>
        <div className='hidden md:flex gap-6'>
          {navLinks.map((nav, idx) => (
            <Link key={idx} to={`/${nav}`} className='capitalize cursor-pointer text-white/50 hover:text-gray-400'>
              {nav}
            </Link>
          ))}
        </div>

       <div className='md:hidden'>
          {menuOpen ? (
            <X size={28} onClick={() => setMenuOpen(false)} className='cursor-pointer' />
          ) : (
            <Menu size={28} onClick={() => setMenuOpen(true)} className='cursor-pointer' />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className='flex flex-col items-center gap-4 py-4 md:hidden '>
          {navLinks.map((nav, idx) => (
            <Link
              key={idx}
              to={`/${nav}`}
              onClick={() => setMenuOpen(false)}
              className='text-lg capitalize cursor-pointer border-b border-gray-600 pb-1 hover:text-gray-400'
            >
              {nav}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
