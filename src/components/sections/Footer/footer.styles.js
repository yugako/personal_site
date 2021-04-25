import styled from 'styled-components';
import { SectionWrap } from '../../../layout/layout.styles';

export const FooterWrap = styled(SectionWrap).attrs({
  as: 'footer',
})`
  text-align: center;
  a {
    display: inline-block;
  }
`;

export const FooterText = styled.p`
  color: var(--gray);
  margin: 0 0 2rem;
`;
