import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from '../HomePage/Data';

function About() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default About;
