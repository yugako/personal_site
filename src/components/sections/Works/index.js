import React from 'react';
import { Container, Masonry, SectionWrap } from '../../../layout/layout.styles';
import { WorkItem } from './WorkItem';

// const worksData = [
//     {
//         preview: '/images/works/amerifreight.jpg',
//         title: 'AmeriFreight',
//         category: 'Corporate'
//     },
//     {
//         preview: '/images/works/saa.jpg',
//         title: 'SAA',
//         category: 'Non-profit'
//     },
//     {
//         preview: '/images/works/dtr.jpg',
//         title: 'DTR Modern',
//         category: 'Art'
//     },
//     {
//         preview: '/images/works/nmr.jpg',
//         title: 'NMR Distribution',
//         category: 'WholeSale'
//     },
//     {
//         preview: '/images/works/rhode.jpg',
//         title: 'RhodesideRevival',
//         category: 'Services'
//     },
//     {
//         preview: '/images/works/uweed.jpg',
//         title: 'uWeed',
//         category: 'Medicine'
//     },
//     {
//         preview: '/images/works/dlfny.jpg',
//         title: 'DLFNY',
//         category: 'Design'
//     },
//     {
//         preview: '/images/works/assistrx.jpg',
//         title: 'AssistRX',
//         category: 'Medicine'
//     },
//     {
//         preview: '/images/works/acacio.jpg',
//         title: 'Acacio',
//         category: 'Landscape'
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
            slug={work.fields.slug}
          />
        ))}
      </Masonry>
    </Container>
  </SectionWrap>

);
