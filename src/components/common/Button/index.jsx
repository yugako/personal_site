import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrap } from './button.styles';

export const Button = ({ clickHandler, children }) => (
  <ButtonWrap onClick={clickHandler}>
    {children}
  </ButtonWrap>
);

Button.defaultProps = {
  clickHandler: () => {},
  children: null,
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.elementType,
};
