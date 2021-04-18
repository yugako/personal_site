import React from 'react';
import PropTypes from 'prop-types';
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

const BackLink = (props) => <Link to="/" {...props}>Go Back</Link>;

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  const {
    title, thumbnail, duration, role, client, source, description,
  } = frontmatter;
  return (
    <Layout>
      <WDWrap>
        <Container>
          <Flex horizontal="space-between">
            <WDTitle>{title}</WDTitle>
            <ButtonWrap as={BackLink} />
          </Flex>
          <Grid gap={50} vertical="stretch">
            <WDImg
              src={thumbnail}
              alt={title}
            />
            <WDContent>
              <Grid style={{ marginBottom: 50 }}>
                <WDMeta>
                  <WDLabel>Deliverables</WDLabel>
                  <WDValue>{duration}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Role</WDLabel>
                  <WDValue>{role}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Client</WDLabel>
                  <WDValue>{client}</WDValue>
                </WDMeta>
                <WDMeta>
                  <WDLabel>Visit</WDLabel>
                  <WDValue>
                    <a href={source} target="_blank" rel="nofollow noreferrer">{source}</a>
                  </WDValue>
                </WDMeta>
              </Grid>
              <WDDescription
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </WDContent>
          </Grid>
        </Container>
      </WDWrap>
    </Layout>
  );
}

Template.defaultProps = {
  data: {},
};

Template.propTypes = {
  data: PropTypes.any,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
