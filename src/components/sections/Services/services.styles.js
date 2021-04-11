import styled from "styled-components";

export const ServicesList = styled.div`
  margin-top: 20px;
`;

export const SIWrap = styled.div`
  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    position: relative;
  }
`;

export const SIIconWrap = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary);
    bottom: 10px;
    right: -20px;
    z-index: -1;
  }
`;

export const SITitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--dark);
  font-family: var(--secondary-font);
`;

export const SIText = styled.p`
  color: var(--gray);
  margin-top: 5px;
`;
