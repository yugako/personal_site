import React from 'react';
import { Dot } from '../../common/Dot';
import { Container, SectionWrap } from '../../../layout/layout.styles';
import { Heading } from './banner.styles';
import { Socials } from '../../common/Socials';
import { bannerText } from '../../../data';

export const Banner = () => (
  <SectionWrap id="home" className="banner">
    <Container>
      <Heading>
        {bannerText.greetings}
        {' '}
        <strong>{bannerText.owner_name}</strong>
        <Dot />
      </Heading>
      <p>{bannerText.owner_intro}</p>
      <Socials />
    </Container>
  </SectionWrap>
);
