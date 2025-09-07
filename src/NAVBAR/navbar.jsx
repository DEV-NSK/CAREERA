

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "/src/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 py-3 relative">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CAREERA
          </span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-none items-center justify-center">
        <div className="flex items-center space-x-8 mr-6">
          <Link 
            to="/" 
            className="text-neutral hover:text-primary font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/roadmaps" 
            className="text-neutral hover:text-primary font-medium transition-colors duration-200"
          >
            Roadmaps
          </Link>
          {/* <Link 
            to="/about" 
            className="text-neutral hover:text-primary font-medium transition-colors duration-200"
          >
            About
          </Link> */}
          
          {user && (
            <>
              <Link 
                to="/dashboard" 
                className="text-neutral hover:text-primary font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="text-neutral hover:text-primary font-medium transition-colors duration-200"
              >
                Profile
              </Link>
            </>
          )}
        </div>
        
        {/* Search Bar */}
        <div className="relative mr-6">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm bg-base-200 border-base-300 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-48"
          />
          <svg 
            className="absolute left-3 top-2.5 h-4 w-4 text-neutral/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link 
                to="/login" 
                className="text-primary hover:text-primary-focus font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="btn btn-primary text-white font-medium px-4 py-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button 
              onClick={handleLogout} 
              className="text-neutral hover:text-primary font-medium transition-colors duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex-none">
        <button 
          onClick={toggleMobileMenu}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg border-t border-base-200 md:hidden z-50">
          <div className="px-4 py-3 space-y-2">
            <Link 
              to="/" 
              className="block py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/roadmaps" 
              className="block py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmaps
            </Link>
            {/* <Link 
              to="/about" 
              className="block py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link> */}
            
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  className="block py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="block py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
            
            <div className="border-t border-base-200 my-2"></div>
            
            <div className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered w-full bg-base-200 border-base-300 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg 
                  className="absolute left-3 top-2.5 h-4 w-4 text-neutral/70" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            
            <div className="border-t border-base-200 my-2"></div>
            
            <div className="px-4 py-2 space-y-2">
              {!user ? (
                <>
                  <Link 
                    to="/login" 
                    className="block py-3 px-4 text-primary hover:text-primary-focus hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block py-3 px-4 btn btn-primary text-white rounded-lg transition-colors duration-200 font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button 
                  onClick={handleLogout}
                  className="block w-full py-3 px-4 text-neutral hover:text-primary hover:bg-base-200 rounded-lg transition-colors duration-200 font-medium text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;