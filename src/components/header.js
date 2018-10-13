import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Flex,
  Heading2,
} from './shared';
import { COLORS } from '../constants';

const Header = ({ siteTitle }) => (
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
        <Flex>
          <div style={{ marginRight: 10 }}>
            <Heading2 light>
              <Link to="/">
                Home
              </Link>
            </Heading2>
          </div>
          <Heading2 light>
            <Link to="/about">
              About
            </Link>
          </Heading2>
        </Flex>
      </Flex>
    </Container>
  </div>
)

export default Header
