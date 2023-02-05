import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Container } from '@mui/material';
import PropTypes from 'prop-types';

import {
  Flex,
  Heading2,
} from './shared';
import { COLORS } from '../constants';
import Logo from './shared/Logo';

import '../components/Header.css';
import { isUsingDarkMode } from '../hooks/useDarkMode';

export const NAVBAR_HEIGHT = 60;

const SUB_MENU_ITEMS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Contact',
    path: '/contact_form',
  },
];

const MoonIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

const SunIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  )
}

class Header extends Component {
  renderSub = () => {
    return (
      <Flex style={{ color: 'white', gap: 16 }}>
        {SUB_MENU_ITEMS.map(({ label, path }, index) => (
          <Link
            key={index}
            href={path}
          >
            {label}
          </Link>
        ))}

        {isUsingDarkMode && (
          <button
            className="dark-mode-button"
            onClick={this.props.onToggleDarkMode}
          >
            {this.props.isDarkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        )}
      </Flex>
    )
  }

  render() {
    return (
      <Flex
        style={{
          background: COLORS.PRIMARY_1,
          height: NAVBAR_HEIGHT,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <Container>
          <Flex
            justifyContent="space-between"
          >
            <Heading2 style={{ color: 'white' }}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Logo color="#ffffff" />
              </Link>
            </Heading2>
            {this.renderSub()}
          </Flex>
        </Container>
      </Flex>
    )
  }
}

const propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
};

Header.propTypes = propTypes;

export default Header
