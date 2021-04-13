import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import { BlogItem } from './BlogItem';
//
// const articles = [
//     {
//         preview: 'https://preview.colorlib.com/theme/space/images/gal_4.jpg',
//         title: "About programmer`s lifestyle",
//         date: "21 Mar, 2021"
//     },{
//         preview: 'https://preview.colorlib.com/theme/space/images/gal_2.jpg',
//         title: "About programmer`s lifestyle",
//         date: "14 Feb, 2021"
//     },{
//         preview: 'https://preview.colorlib.com/theme/space/images/gal_3.jpg',
//         title: "About programmer`s lifestyle",
//         date: "26 Dec, 2020"
//     },{
//         preview: 'https://preview.colorlib.com/theme/space/images/gal_1.jpg',
//         title: "About programmer`s lifestyle",
//         date: "23 Oct, 2020"
//     }
// ]

export const Blog = ({ articles }) => (
  <SectionWrap>
    <Container>
      <SectionHeading title="Blog" subtitle="News & Updates" align="center" />
      <Grid columns="1fr 1fr 1fr 1fr" style={{ marginTop: '1.5rem' }}>
        {articles.map((article) => (
          <BlogItem
            key={article.frontmatter.title}
            preview={article.frontmatter.featuredImage?.childImageSharp?.fluid}
            title={article.frontmatter.title}
            date={article.frontmatter.date}
            slug={article.frontmatter.slug}
          />
        ))}
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
