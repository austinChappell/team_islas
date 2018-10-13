import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  // Button,
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
              onClick={this.handleClose}
            >
              <Link to={path}>
                {label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
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
            {this.renderSub()}
          </Flex>
        </Container>
      </div>
    )
  }
}

export default Header
