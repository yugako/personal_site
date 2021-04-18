import React from 'react';
import { Link } from 'gatsby';
import { elementType } from 'prop-types';
import { Logo } from './logo.styles';
import { Dot } from '../Dot';

// eslint-disable-next-line react/jsx-props-no-spreading
const LogoLink = ({ children, ...props }) => <Link to="/" {...props}>{children}</Link>;

export const AppLogo = () => (
  <Logo as={LogoLink}>
    Hasiuk
    <Dot />
  </Logo>
);

LogoLink.defaultProps = {
  children: null,
};

LogoLink.propTypes = {
  children: elementType,
};
