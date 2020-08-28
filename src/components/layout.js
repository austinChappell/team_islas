import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Footer from './Footer';
import Header from './header';
import './layout.css';

const NAVBAR_HEIGHT = 60;

const Layout = ({
  children,
  className = '',
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
      <>
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
                paddingTop: NAVBAR_HEIGHT,
              }}
            >
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayColor: PropTypes.string,
};

export default Layout;
