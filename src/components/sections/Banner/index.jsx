import React from 'react';
import { Dot } from '../../common/Dot';
import { Container } from '../../../layout/layout.styles';
import { Heading } from './banner.styles';
import { Socials } from '../../common/Socials';

export const Banner = () => (
  <section id="home">
    <Container>
      <Heading>
        Hey! I`m
        <strong>Yurii</strong>
        <Dot />
      </Heading>
      <p>Passioned, highly-motivated Web developer.</p>
      <Socials />
    </Container>
  </section>
);
