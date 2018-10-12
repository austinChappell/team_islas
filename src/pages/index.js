import React from 'react'

import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const IndexPage = () => (
  <Layout>
    <h1
      style={{
        marginBottom: 20,
      }}
    >
      New Album Coming Soon!
    </h1>
    <ReactPlayer
      url="https://youtu.be/Lnul3DwS_bc"
    />
  </Layout>
)

export default IndexPage
