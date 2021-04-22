import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import { BlogItem } from './BlogItem';

export const Blog = ({ articles }) => (
  <SectionWrap id="blog">
    <Container>
      <SectionHeading title="Blog" subtitle="News & Updates" align="center" />
      <Grid columns="1fr 1fr 1fr 1fr" style={{ marginTop: '1.5rem' }}>
        {articles.length ? articles.map((article) => (
          <BlogItem
            key={article.frontmatter.title}
            preview={article.frontmatter.thumbnail}
            title={article.frontmatter.title}
            date={article.frontmatter.date}
            slug={article.fields.slug}
          />
        )) : 'No articles to show'}
      </Grid>
    </Container>
  </SectionWrap>
);

Blog.defaultProps = {
  articles: [],
};

Blog.propTypes = {
  articles: PropTypes.array,
};
