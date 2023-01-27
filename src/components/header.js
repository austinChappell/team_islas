import React, { Component } from 'react'
import { Link } from 'gatsby'

import {
  Container,
  Flex,
  Heading2,
} from './shared';
import { COLORS } from '../constants';
import Logo from './shared/Logo';

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
      </Flex>
    )
  }

  render() {
    return (
      <Flex
        style={{
          background: COLORS.PRIMARY_1,
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
            <Heading2 light>
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

export default Header
