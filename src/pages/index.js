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
    <ReactPlayer
      url="https://youtu.be/Lnul3DwS_bc"
    />
  </Layout>
)

export default IndexPage
