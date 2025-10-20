import React, { useState } from 'react';
import logoImg from '../../../../assets/logo/logo.png';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { CiUnlock } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-100  fixed top-0 left-0 w-full z-50">
      <div className="w-10/12 mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="StartupLand Logo" className="w-10 h-10 object-contain" />
          <h3 className="text-xl font-bold text-gray-800">StartupLand</h3>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#E5A740]' : 'hover:text-[#E5A740]'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#E5A740]">
            <NavLink to="/advertise">Advertise</NavLink>
            <FaCaretDown size={14} />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#E5A740]">
            <NavLink to="/support">Supports</NavLink>
            <FaCaretDown size={14} />
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-[#E5A740]' : 'hover:text-[#E5A740]'
              }
            >
              About
            </NavLink>
          </li>
          <LuSearch className="cursor-pointer hover:text-[#E5A740]" size={20} />
        </ul>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#E5A740] font-medium">
            <CiUnlock size={22} />
            Login
          </button>
          <button className="hidden md:block bg-[#E5A740] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#cf922f] transition">
            Get Started
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-[#E5A740] focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-100 shadow-md border-t">
          <div className="w-10/12 mx-auto flex flex-col items-center gap-5 py-6 text-gray-700 font-medium">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-[#E5A740]' : 'hover:text-[#E5A740]'
              }
            >
              Home
            </NavLink>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#E5A740]">
              <NavLink to="/advertise" onClick={toggleMenu}>Advertise</NavLink>
              <FaCaretDown size={14} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#E5A740]">
              <NavLink to="/support" onClick={toggleMenu}>Supports</NavLink>
              <FaCaretDown size={14} />
            </div>

            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-[#E5A740]' : 'hover:text-[#E5A740]'
              }
            >
              About
            </NavLink>

            <LuSearch className="cursor-pointer hover:text-[#E5A740]" size={20} />

            <button className="flex items-center gap-2 text-gray-700 hover:text-[#E5A740] font-medium">
              <CiUnlock size={22} />
              Login
            </button>
            <button className="bg-[#E5A740] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#cf922f] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
