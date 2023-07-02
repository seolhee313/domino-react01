import React from 'react';
import Contents from '../layout/Contents';

import Slider from '../section/Slider';
import Links from '../section/Links';
import Event from '../section/Event';
import Card from '../section/Card';

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr={'Roboto'} />
        <Links attr={'Roboto'} />
        <Event attr={'Roboto gray'} />
        <Card attr={'Roboto'} />
      </Contents>
    </>
  );
};

export default Home;
