import React from 'react';
import PropTypes, { string } from 'prop-types';
import { graphql, Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
import { SEO } from '../components/common/SEO';

const BackLink = ({ bgImage, ...props }) => (
  <AniLink
    cover
    to="/"
    bg={`
      url(${bgImage})
      center / cover   /* position / size */
      no-repeat        /* repeat */
      fixed            /* attachment */
      padding-box      /* origin */
      content-box      /* clip */
      #1b9cfc            /* color */
    `}
    {...props}
  >
    Go Back
  </AniLink>
);

BackLink.defaultProps = {
  bgImage: '',
};

BackLink.propTypes = {
  bgImage: string,
};

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const {
    title, thumbnail, duration, role, client, source,
  } = frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        image={thumbnail}
      />
      <WDWrap>
        <Container>
          <Flex className="wd-header" horizontal="space-between">
            <WDTitle>{title}</WDTitle>
            <ButtonWrap bgImage={thumbnail} as={BackLink} />
          </Flex>
          <Grid gap={50} vertical="stretch" className="wd-content">
            <WDImg
              src={thumbnail}
              alt={title}
            />
            <WDContent>
              <Grid>
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
                dangerouslySetInnerHTML={{ __html: html }}
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
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        client
        duration
        thumbnail
        role
        source
      }
    }
  }
`;
