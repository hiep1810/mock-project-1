import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CustomNavLink from './CustomLink';
import './Header.css';

const Header = (props) => {
  // redux login state:
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            Online TODO List
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              {isLoggedIn ? (
                <li className='nav-item'>
                  <CustomNavLink to='/'>
                    <i className='fa fa-list' aria-hidden='true'></i> TODO List
                  </CustomNavLink>
                </li>
              ) : null}
              {!isLoggedIn ? (
                <li className='nav-item'>
                  <CustomNavLink to='/login'>
                    <i className='fa fa-user' aria-hidden='true'></i> Sign In
                  </CustomNavLink>
                </li>
              ) : null}
              {!isLoggedIn ? (
                <li className='nav-item'>
                  <CustomNavLink to='/register'>
                    <i className='fa fa-user-plus' aria-hidden='true'></i>{' '}
                    Register
                  </CustomNavLink>
                </li>
              ) : null}
              {isLoggedIn ? (
                <li className='nav-item'>
                  <CustomNavLink to='/logout'>
                    <i className='fa fa-sign-out' aria-hidden='true'></i> Sign
                    Out
                  </CustomNavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
