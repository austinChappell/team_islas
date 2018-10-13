import React from 'react'

import Layout from '../components/layout';
import ReactPlayer from 'react-player';

import { Heading1 } from '../components/shared';

const IndexPage = () => (
  <Layout>
    <div>
      <Heading1>
        New Album Coming Soon!
      </Heading1>
    </div>
    <div
      style={{
        position: 'relative',
        paddingTop: '56.25%',
        flexGrow: 1,
      }}
    >
      <ReactPlayer
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
        url="https://youtu.be/Lnul3DwS_bc"
      />
    </div>
  </Layout>
)

export default IndexPage
