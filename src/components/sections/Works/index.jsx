import React from 'react';
import { Container, Masonry, SectionWrap } from '../../../layout/layout.styles';
import { WorkItem } from './WorkItem';

// const worksData = [
//     {
//         preview: '/images/works/assistrx.jpg',
//         title: 'AssistRX',
//         category: 'Medicine'
//     },
//     {
//         preview: '/images/works/hr.jpg',
//         title: 'Hryzantema',
//         category: 'Services'
//     },
//     {
//         preview: '/images/works/ambari.jpg',
//         title: 'AmabariBeauty',
//         category: 'Cosmetics'
//     }
// ]

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
