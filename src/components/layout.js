import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import {
  Box, createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';
import { purple } from '@mui/material/colors';

import Footer from './Footer';
import Header, { NAVBAR_HEIGHT } from './header';
import './layout.css';
import { COLORS } from '../constants';
import { useDarkMode } from '../hooks/useDarkMode';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_1,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[400],
    },
  },
});

const Layout = ({
  children,
  className = '',
  excludePaddingTop = false,
}) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggleDarkMode = useCallback(() => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }, [setDarkMode]);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
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
          <CssBaseline />

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
            <Header
              isDarkMode={darkMode}
              onToggleDarkMode={handleToggleDarkMode}
              siteTitle={data.site.siteMetadata.title}
            />

            <div
              className={className}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  flexGrow: 1,
                  paddingTop: excludePaddingTop ? 0 : `${NAVBAR_HEIGHT}px`,
                }}
              >
                {children}
              </Box>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  excludePaddingTop: PropTypes.bool,
};

export default Layout;
