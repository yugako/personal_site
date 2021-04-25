import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  width: 100%;
  text-align: ${({ align }) => align || 'left'};
  margin: 1rem 0;
  svg {
    width: 200px;
    height: 200px;
    margin: auto;
    display: block;
  }
`;
