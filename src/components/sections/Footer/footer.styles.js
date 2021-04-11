import styled from "styled-components";
import {SectionWrap} from "../../../layout/layout.styles";

export const FooterWrap = styled(SectionWrap)`
  text-align: center;
  margin-bottom: 1rem;
  a {
    display: inline-block;
  }
`;

export const FooterText = styled.p`
  color: var(--gray);
  margin: 0;
`;
