import React from 'react';
import { Dot } from '../../common/Dot';
import { Container } from '../../../layout/layout.styles';
import { Heading } from './banner.styles';
import { Socials } from '../../common/Socials';
import { bannerText } from '../../../data';

export const Banner = () => (
  <section id="home">
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
  </section>
);
