import React from 'react';
import { Grid } from '../../../layout/layout.styles';
import { AboutExperience, AEItem, AEItemContent } from './about.styles';
import { IBriefcase } from '../../common/Icons';
import { aboutText } from '../../../data';

export const AExperience = () => (
  <AboutExperience>
    <h3>{aboutText.exp_title}</h3>
    <Grid>
      {aboutText.exp_list.map((exp) => (
        <AEItem>
          <IBriefcase />
          <AEItemContent>
            <h4>{exp.title}</h4>
            <a href={exp.site} rel="nofollow noreferrer" target="_blank">{exp.company}</a>
            <span>{exp.duration}</span>
          </AEItemContent>
        </AEItem>
      ))}
    </Grid>
  </AboutExperience>
);
