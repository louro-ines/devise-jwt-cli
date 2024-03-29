import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './auth/Logout';

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
  return (
    <nav className='bg-blue-50 text-blue-500'>
      <div className='w-11/12 max-w-6xl mx-auto grid sm:grid-cols-3 md:grid-cols-4'>
        <div className='sm:col-span-2 md:col-span-3'>
          <NavLink
            className='p-4 block sm:inline-block'
            exact="true"
            to='/'
          >
            NormalRoute
          </NavLink>
          <NavLink
            className='p-4 block sm:inline-block'
            exact="true"
            to='/protected_route'
          >
            ProtectedRoute
          </NavLink>
        </div>
        <div className='sm:text-right'>
          {loggedIn ? (
            <>
              {currentUser.email}
              <Logout />
            </>
          ) : (
            <>
              <NavLink
                className='p-4 inline-block'
                exact="true"
                to='/signup'
              >
                Sign Up
              </NavLink>
              <NavLink
                className='p-4 inline-block'
                exact="true"
                to='/login'
              >
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

export default connect(mapStateToProps)(Navbar);
