import styled from "styled-components";

export const AboutImage = styled.img`
  filter: grayscale(1);
  
`;

export const AboutContent = styled.div`
  margin-top: 3rem;
  @media (max-width: 991px) {
    margin-top: 2rem;
    & > div {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
`;

export const AboutMeta = styled.div`
  position: relative;
  &::after {
    content: '';
    background-image: url(/images/dots.png);
    width: 304px;
    height: 264px;
    position: absolute;
    display: block;
    top: -10%;
    right: -50px;
    z-index: -1;
    @media (max-width: 991px) {
      right: -10px;
    }
  }
`;

export const AboutInfo = styled.div`
  background-color: var(--primary);
  color: var(--light);
  padding: 20px 20px 20px 30px;
  position: absolute;
  top: 50%;
  right: -15px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  a {
    color: var(--light);
    text-decoration: none;
    &::before {
      content: '\\2192';
      margin-right: 5px;
      font-size: 20px;
    }
  }
`;

export const AboutDescription = styled.div``;
export const AboutBio = styled.div``;
export const AboutExperience = styled.div``;

export const AEItem = styled.div`
  display: flex;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: var(--gray);
    }
  }
`;

export const AEItemContent = styled.div`
  margin-left: 10px;
  span, a {
    display: block;
  }
  h4 {
    margin: 0;
    font-family: var(--secondary-font);
    font-size: 16px;
  }
  
  a {
    text-decoration: none;
    color: var(--primary);
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
  }
`;
