import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Grid, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import {
  AboutContent,
  AboutDescription,
} from './about.styles';
import { AMeta } from './AMeta';
import { ABio } from './ABio';
import { AExperience } from './AExperience';
import { aboutText } from '../../../data';

export const About = () => {
  const [viewRef, inView] = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
  });
  return (
    <SectionWrap id="about" ref={viewRef}>
      {inView && (
      <Container>
        <Grid>
          <SectionHeading
            title={aboutText.section_title}
            subtitle={aboutText.section_subtitle}
          />
        </Grid>
        <AboutContent>
          <Grid gap={60}>
            <AMeta />
            <AboutDescription>
              <ABio />
              <AExperience />
            </AboutDescription>
          </Grid>
        </AboutContent>
      </Container>
      )}

    </SectionWrap>
  );
};
