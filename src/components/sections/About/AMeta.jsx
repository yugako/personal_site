import React from 'react';
import { AboutImage, AboutInfo, AboutMeta } from './about.styles';

export const AMeta = () => (
  <AboutMeta>
    <AboutImage src="/img/me.jpg" alt="Yurii Hasiuk" />
    <AboutInfo>
      <span>2 Years of experience</span>
      <a href="#works">See portfolio</a>
      <a href="#cv">Donwload CV</a>
    </AboutInfo>
  </AboutMeta>
);
