import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { CiUnlock } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="StartupLand Logo"
          className="w-10 h-10 object-contain"
        />
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

      
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700 hover:text-[#E5A740] font-medium">
          <CiUnlock size={22} />
          Login
        </button>
        <button className="bg-[#E5A740] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#cf922f] transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
