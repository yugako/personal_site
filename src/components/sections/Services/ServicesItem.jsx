import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import {
  SIIconWrap, SIText, SITitle, SIWrap,
} from './services.styles';

export const ServiceItem = ({ Icon, title, description }) => {
  const [viewRef, inView] = useInView({
    threshold: 0,
    delay: 100,
  });
  return (
    <SIWrap ref={viewRef}>
      {inView && (
        <>
          <SIIconWrap>
            <Icon />
          </SIIconWrap>
          <SITitle>{title}</SITitle>
          <SIText>{description}</SIText>
        </>
      ) }

    </SIWrap>
  );
};

ServiceItem.defaultProps = {
  Icon: null,
  title: '',
  description: '',
};

ServiceItem.propTypes = {
  Icon: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string,
};
