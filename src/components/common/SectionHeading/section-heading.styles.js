import styled from "styled-components";

export const SCWrap = styled.div`
  text-align: ${({align}) => align || 'left'};
`;

export const SCTitle = styled.h2`
  font-size: 30px;
  color: var(--dark);
  font-family: var(--secondary-font);
  margin: 0;
`;

export const SCSubtitle = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;
