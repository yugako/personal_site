import styled from "styled-components";

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  position: relative;
  z-index: 2;
  justify-content: ${({horizontal}) => horizontal || 'flex-start'};
  a {
    margin: 0 7px;
    @media (max-width: 415px) {
      margin: 0 5px;
    }
    &:first-child {
      margin-left: 0;
    }
    
    svg {
      width: 25px;
      height: 25px;
      path {
        transition: 0.5s ease-out;
        fill: var(--dark);
      }
    }

    &:hover {
      svg, svg path {
        transition: 0.5s ease-out;
        fill: var(--primary);
      }
    }
  }
`;
