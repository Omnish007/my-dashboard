import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import User from "../assets/images/user.jpg";

const Navbar = () => {
  return (
    <nav className="bg-primary-bg p-4 flex flex-col md:flex-row md:justify-between items-center">
      <div className="w-full flex items-center justify-between space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white p-2 pl-10 rounded-md w-full md:w-auto"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex items-center space-x-4">
          <BellIcon className="buttonIcon text-white hidden md:block" />
          <EnvelopeIcon className="buttonIcon text-white hidden md:block" />
          <Cog6ToothIcon className="buttonIcon text-white hidden md:block" />
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            <img
              src={User}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center space-x-4 mt-2">
        <BellIcon className="buttonIcon text-white" />
        <EnvelopeIcon className="buttonIcon text-white" />
        <Cog6ToothIcon className="buttonIcon text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
