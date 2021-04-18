import React from 'react';
import PropTypes from 'prop-types';
import { SCSubtitle, SCTitle, SCWrap } from './section-heading.styles';

export const SectionHeading = ({ title, subtitle, align }) => (
  <SCWrap align={align}>
    <SCTitle>{title}</SCTitle>
    <SCSubtitle>{subtitle}</SCSubtitle>
  </SCWrap>
);

SectionHeading.defaultProps = {
  title: '',
  subtitle: '',
  align: '',
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  align: PropTypes.string,
};
