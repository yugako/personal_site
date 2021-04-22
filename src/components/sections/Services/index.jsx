import React from 'react';
import { Container, Grid, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import { ServicesList } from './services.styles';
import { ServiceItem } from './ServicesItem';
import { servicesText } from '../../../data';

export const Services = () => (
  <Container>
    <SectionWrap id="services">
      <SectionHeading
        align="center"
        title={servicesText.section_title}
        subtitle={servicesText.section_subtitle}
      />
      <ServicesList>
        <Grid columns="1fr 1fr 1fr">
          {servicesText.services_list.map((service) => (
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
