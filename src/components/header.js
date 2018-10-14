import React, { Component, Fragment } from 'react'
import { Link, navigate } from 'gatsby'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  // Button,
  Container,
  Flex,
  Heading2,
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
  },
  {
    label: 'Super Hands',
    path: '/super_hands',
  },
];

class Header extends Component {
  state = {
    anchorEl: null,
    subMenuOpen: false,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderSub = () => {
    const { anchorEl } = this.state;

    return (
      <Fragment>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FaBars
            color={COLORS.FONT.LIGHT}
            size={26}
          />
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {SUB_MENU_ITEMS.map(({ label, path }, index) => (
            <MenuItem
              key={index}
              onClick={() => navigate(path)}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    )
  }

  render() {
    const { subMenuOpen } = this.state;
    const { height, siteTitle } = this.props;

    return (
      <Flex
        style={{
          background: COLORS.PRIMARY_1,
          height,
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
                {siteTitle}
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
