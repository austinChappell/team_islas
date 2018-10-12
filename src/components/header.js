import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Flex,
} from './shared';
import { COLORS } from '../constants';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: COLORS.PRIMARY_1,
      color: COLORS.FONT.LIGHT,
      marginBottom: '1.45rem',
    }}
  >
    <Container>
      <Flex
        justifyContent="space-between"
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Flex>
          <h2>
            <Link to="/">
              Home
            </Link>
          </h2>
          <h2>
            <Link to="/about">
              About
            </Link>
          </h2>
        </Flex>
      </Flex>
    </Container>
  </div>
)

export default Header
