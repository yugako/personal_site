import * as React from 'react';
import { string } from 'prop-types';
import { SocialsWrapper } from './Socials.styles';
import { socialLinks } from '../../../data';

export const Socials = ({ horizontal }) => (
  <SocialsWrapper horizontal={horizontal}>
    {socialLinks.map((link) => (
      <a target="_blank" key={link.to} href={link.to} rel="noreferrer">
        <link.icon color="var(--light)" />
      </a>
    ))}
  </SocialsWrapper>
);

Socials.defaultProps = {
  horizontal: '',
};

Socials.propTypes = {
  horizontal: string,
};
