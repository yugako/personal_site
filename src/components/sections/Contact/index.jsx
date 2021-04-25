import React from 'react';
import { Container, SectionWrap } from '../../../layout/layout.styles';
import { SectionHeading } from '../../common/SectionHeading';
import { contactText } from '../../../data';
import { ContactForm } from './Form';

export const Contact = () => (
  <SectionWrap id="contact">
    <Container>
      <SectionHeading align="center" title={contactText.section_title} subtitle={contactText.section_subtitle} />
      <ContactForm />
    </Container>
  </SectionWrap>

);
