import React from 'react';
import { string } from 'prop-types';
import { EmptyWrapper } from './empty.styles';
import { INews } from '../Icons/News';

export const Empty = ({ message, align }) => (
  <EmptyWrapper align={align}>
    <INews />
    {message}
  </EmptyWrapper>
);

Empty.defaultProps = {
  message: '',
  align: 'left',
};

Empty.propTypes = {
  message: string,
  align: string,
};
