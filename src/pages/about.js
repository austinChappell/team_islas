import React from 'react';

import BioCard from '../components/BioCard';
import Layout from '../components/layout'

import { BIOS } from '../data';

const SecondPage = () => (
  <Layout>
    {BIOS.map((bio, index) => {
      return (
        <div
          key={index}
          style={{
            margin: 15,
          }}
        >
          <BioCard user={bio} />
        </div>
      )
    })}
  </Layout>
)

export default SecondPage
