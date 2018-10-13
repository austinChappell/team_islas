import React from 'react';

import BioCard from '../components/BioCard';
import Layout from '../components/layout'

import { BIOS } from '../data';

const SecondPage = () => (
  <Layout>
    {BIOS.map((bio, index) => {
      return (
        <BioCard
          key={index}
          user={bio}
        />
      )
    })}
  </Layout>
)

export default SecondPage
