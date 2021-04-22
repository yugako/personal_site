import React from 'react';
import { AboutBio } from './about.styles';
import { aboutText } from '../../../data';

export const ABio = () => (
  <AboutBio>
    <h3>{aboutText.bio_title}</h3>
    <p>{aboutText.bio_info}</p>
  </AboutBio>
);
