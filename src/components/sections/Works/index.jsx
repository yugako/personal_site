import React from 'react';
import { array } from 'prop-types';
import { Container, Masonry, SectionWrap } from '../../../layout/layout.styles';
import { WorkItem } from './WorkItem';

export const Works = ({ works }) => (
  <SectionWrap id="works">
    <Container>
      <Masonry>
        {works.map((work) => (
          <WorkItem
            key={work.frontmatter.title}
            title={work.frontmatter.title}
            preview={work.frontmatter.thumbnail}
            duration={work.frontmatter.duration}
            slug={work.fields.slug}
          />
        ))}
      </Masonry>
    </Container>
  </SectionWrap>
);

Works.defaultProps = {
  works: [],
};

Works.propTypes = {
  works: array,
};
