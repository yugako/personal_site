import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { WorkItemContent, WorkItemOverlay, WorkItemWrapper } from './works.styles';

export const WorkItem = ({
  title, category, preview, slug,
}) => (
  <WorkItemWrapper>
    <Link to={slug}>
      <img src={preview} alt={title} />
      <WorkItemOverlay>
        <span className="wrap-icon icon-link2" />
        <WorkItemContent>
          <h3>{title}</h3>
          {/* <p>Industry: {category}</p> */}
        </WorkItemContent>
      </WorkItemOverlay>
    </Link>

  </WorkItemWrapper>
);

WorkItem.propTypes = {
  title: PropTypes.string,
  preview: PropTypes.string,
  category: PropTypes.string,
};
