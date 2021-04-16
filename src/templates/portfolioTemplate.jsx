import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  WDContent,
  WDDescription,
  WDImg,
  WDLabel,
  WDMeta,
  WDTitle,
  WDValue, WDWrap,
} from '@components/sections/Works/work-details.styles';
import { ButtonWrap } from '@components/common/Button/button.styles';
import { Container, Flex, Grid } from '../layout/layout.styles';
import { Layout } from '../layout';

// eslint-disable-next-line react/jsx-props-no-spreading
const BackLink = (props) => <Link to="/" {...props}>Go Back</Link>;

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <WDWrap>
        <Container>
          <Flex horizontal="space-between">
            <WDTitle>{frontmatter.title}</WDTitle>
            <ButtonWrap as={BackLink} />
          </Flex>
          <Grid gap={50} vertical="stretch">
            <WDImg
              src={frontmatter.thumbnail}
              alt={frontmatter.title}
            />
            <WDContent>
              <Grid style={{ marginBottom: 50 }}>
                <WDMeta>
                  <WDLabel>Deliverables</WDLabel>
                  <WDValue>{frontmatter.duration}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Role</WDLabel>
                  <WDValue>{frontmatter.role}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Client</WDLabel>
                  <WDValue>{frontmatter.client}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Visit</WDLabel>
                  <WDValue>
                    <a href={frontmatter.source} target="_blank" rel="nofollow noreferrer">{frontmatter.source}</a>
                  </WDValue>
                </WDMeta>
              </Grid>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </WDContent>
          </Grid>
        </Container>
      </WDWrap>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        client
        duration
        thumbnail
        role
        source
        description
      }
    }
  }
`;
