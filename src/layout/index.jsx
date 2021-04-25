import React from 'react';
import PropTypes from 'prop-types';
import { LayoutStyles } from './layout.styles';

export const Layout = ({ children }) => (
  <>
    <LayoutStyles />
    {children}
  </>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.any,
};
