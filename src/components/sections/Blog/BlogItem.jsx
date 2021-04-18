import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  BIDate, BIImage, BITitle, BIWrap,
} from './blog.styles';

const BlogDetailsLink = ({ slug, children, ...props }) => (
  <Link
    to={slug}
    {...props}
  >
    {children}
  </Link>
);

export const BlogItem = ({
  preview, title, date, slug,
}) => (
  <BIWrap as={BlogDetailsLink} slug={slug}>
    <BIImage src={preview} />
    <BITitle>{title}</BITitle>
    <BIDate>{date}</BIDate>
  </BIWrap>
);

BlogItem.defaultProps = {
  preview: '',
  title: '',
  date: '',
  slug: '',
};

BlogItem.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
};
