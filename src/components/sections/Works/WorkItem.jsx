import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { WorkItemContent, WorkItemOverlay, WorkItemWrapper } from './works.styles';

export const WorkItem = ({
  title, duration, preview, slug,
}) => {
  const [viewRef, inView] = useInView({
    threshold: 0,
    delay: 100,
    triggerOnce: true,
  });

  return (
    <WorkItemWrapper ref={viewRef}>
      {inView && (
      <Link to={`${slug}`}>
        <img src={preview} alt={title} />
        <WorkItemOverlay>
          <span className="wrap-icon icon-link2" />
          <WorkItemContent>
            <h3>{title}</h3>
            <p>
              Deliverables:
              {' '}
              {duration}
            </p>
          </WorkItemContent>
        </WorkItemOverlay>
      </Link>
      )}
    </WorkItemWrapper>
  );
};

WorkItem.defaultProps = {
  title: '',
  slug: '',
  preview: '',
  duration: '',
};

WorkItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  preview: PropTypes.string,
  duration: PropTypes.string,
};
