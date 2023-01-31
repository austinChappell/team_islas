import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { createTheme, ThemeProvider } from '@mui/material';

import Footer from './Footer';
import Header, { NAVBAR_HEIGHT } from './header';
import './layout.css';
import { COLORS } from '../constants';


const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_1,
    },
  },
});

const Layout = ({
  children,
  className = '',
  excludePaddingTop = false,
  overlayColor = '#00000000',
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            className={className}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              position: 'relative',
            }}
          >
            <div
              style={{
                backgroundColor: overlayColor,
                flexGrow: 1,
                paddingTop: excludePaddingTop ? 0 : NAVBAR_HEIGHT,
              }}
            >
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayColor: PropTypes.string,
};

export default Layout;
