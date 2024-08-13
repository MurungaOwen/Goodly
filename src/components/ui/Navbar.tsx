// src/components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import SignUpButton from './SignupBtn';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white rounded-sm p-2 m-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-white hover:text-orange-300 font-bold text-lg">
              Goo<span className="text-orange-400 hover:text-white">Dly</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/donate" 
                className="hover:text-orange-400">Donate</Link>
              <Link 
                to="/events" 
                className="hover:text-orange-400">Events</Link>
              <Link 
                to="/" 
                className="hover:text-orange-400">Feedback</Link>
            </div>
          </div>
          
          {/* Signup and Volunteer Links */}
          <div className="flex space-x-4 items-center md:ml-auto">
            <Link 
              to="/events" 
              className="hidden md:block hover:text-orange-400">Volunteer</Link>
              <SignedOut>
                  <SignUpButton />
              </SignedOut>
               
              <SignedIn>
                <UserButton />
              </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 py-4">
            <Link 
              to="/donate" 
              className="block text-white hover:text-orange-400">Donate</Link>
            <Link 
              to="/" 
              className="block text-white hover:text-orange-400">Events</Link>
            <Link 
              to="/" 
              className="block text-white hover:text-orange-400">Feedback</Link>
            <Link 
              to="/" 
              className="block text-white hover:text-orange-400">Volunteer</Link>

            <SignedOut>
              <SignUpButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
