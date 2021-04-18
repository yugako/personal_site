import React from 'react';
import { bool, func } from 'prop-types';
import { BackdropWrap } from './navigation.styles';

export const Backdrop = ({
  isActive, clickHandler,
}) => <BackdropWrap isActive={isActive} onClick={clickHandler} />;

Backdrop.defaultProps = {
  isActive: false,
  clickHandler: () => {},
};

Backdrop.propTypes = {
  isActive: bool,
  clickHandler: func,
};
