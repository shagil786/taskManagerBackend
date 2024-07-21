import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import LogoutButton from './LogoutButton';
import AuthUserImage from './AuthUserImage';

function Header() {
  const { authUser } = useAuthContext()
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);

  const handleLoginClick = () => {
    setLoginActive(true);
    setSignupActive(false);
  };

  const handleSignupClick = () => {
    setSignupActive(true);
    setLoginActive(false);
  };


    return (
      <header className="flex justify-between items-center py-4 px-6 bg-blue-500">
        <div className="menu-icon">
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          {/* Your menu icon here */}
        </div>
        <div className="flex gap-4">
          { authUser ? (
            <>
            <AuthUserImage />
            <LogoutButton />
            </>
          )
          :(
          <>
          <Link to={'/login'}>
              <button
              className={`py-2 px-4 rounded ${loginActive ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`}
              onClick={handleLoginClick}
              >
              Login
              </button>
          </Link>
          <Link to={'/signup'}>
              <button
              className={`py-2 px-4 rounded ${signupActive ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`}
              onClick={handleSignupClick}
              >
              Signup
              </button>
          </Link>
          </>
          )}
        </div>
      </header>
    );
  }


export default Header;