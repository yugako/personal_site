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

export const About = () => {
  const [viewRef, inView] = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
  });
  return (
    <SectionWrap ref={viewRef}>
      {inView && (
      <Container>
        <Grid>
          <SectionHeading
            title="About"
            subtitle="Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts."
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
