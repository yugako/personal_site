import React from 'react';
import { Container, Grid, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import { ServicesList } from './services.styles';
import { ServiceItem } from './ServicesItem';
import {
  IReact, IWordpress, IMobile, IPalette, ISEO,
} from '../../common/Icons';

const servicesInfo = [
  {
    icon: IReact,
    title: 'Build Single-Page Application',
    description: `You've saw many times these cool sites which don't reload after going to another page? It's a SPA? 
        Do you want the same? Just write me.`,
  }, {
    icon: IMobile,
    title: 'Mobile app developing',
    description: 'Are you looking for an mobile app? And you want it to work on Android and iOS. Let\'s chat!',
  },
  {
    icon: IWordpress,
    title: 'Wordpress Developing',
    description: 'You have a website, but you don`t imagine how change content? So, in this case, you need a content management system and I`ll help you with it',
  }, {
    icon: IPalette,
    title: 'Creating sites from existing design',
    description: 'Do you have a design and you don`t know how make it alive? I can help you with this problem.',
  }, {
    icon: ISEO,
    title: 'Search Engine Optimization',
    description: 'Would you like to see your website on the first position in search results? You are in the right place :)',
  },
];

export const Services = () => (
  <Container>
    <SectionWrap id="services">
      <SectionHeading align="center" title="Services" subtitle="The skills to pay the bills." />
      <ServicesList>
        <Grid columns="1fr 1fr 1fr">
          {servicesInfo.map((service) => (
            <ServiceItem
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </ServicesList>
    </SectionWrap>
  </Container>
);
