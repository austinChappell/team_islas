import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Container,
  Flex,
  Heading2,
  Heading6,
} from './shared';
import { FaBars } from 'react-icons/fa';
import { COLORS } from '../constants';

const SUB_MENU_ITEMS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  }
];

class Header extends Component {
  state = {
    subMenuOpen: false,
  }

  handleOutsideClick = (e) => {
    e.stopPropagation();
    this.setState({ subMenuOpen: false });
  }

  toggleSubMenu = () => {
    const { subMenuOpen } = this.state;
    this.setState({ subMenuOpen: !subMenuOpen });
  }

  renderSubMenu = () => {
    return (
      <div
        onClick={e => this.handleOutsideClick(e)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div
          onClick={e => e.stopPropagation()} // prevent handleOutsideClick from firing if clicked inside submenu
          style={{
            backgroundColor: COLORS.FONT.LIGHT,
            boxShadow: `2px 2px 4px ${COLORS.FONT.DARK_SOFT}`,
            position: 'fixed',
            right: 30,
            top: 70,
          }}
        >
          {SUB_MENU_ITEMS.map(({ label, path }, index) => (
            <div
              style={{
                margin: 10,
              }}
            >
              <Heading6>
                <Link to={path}>
                  {label}
                </Link>
              </Heading6>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    const { subMenuOpen } = this.state;
    const { siteTitle } = this.props;

    return (
      <div
        style={{
          background: COLORS.PRIMARY_1,
          paddingBottom: 10,
          paddingTop: 10,
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
                {siteTitle}
              </Link>
            </Heading2>
            <Button
              buttonText={
                <FaBars
                color={COLORS.FONT.LIGHT}
                size={26}
                />
              }
              onClick={this.toggleSubMenu}
              unstyled
            >
            </Button>
          </Flex>
        </Container>
        {subMenuOpen && this.renderSubMenu()}
      </div>
    )
  }
}

export default Header
