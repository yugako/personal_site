import React from 'react';
import { AboutImage, AboutInfo, AboutMeta } from './about.styles';
import { aboutText } from '../../../data';

export const AMeta = () => (
  <AboutMeta>
    <AboutImage src="/img/me.jpg" alt="Yurii Hasiuk" />
    <AboutInfo>
      <span>{aboutText.exp_years}</span>
      <a href="#works">{aboutText.portfolio_label}</a>
      <a target="_blank" rel="noreferrer" href={aboutText.cv_link}>{aboutText.cv_link_label}</a>
    </AboutInfo>
  </AboutMeta>
);
