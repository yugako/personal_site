import styled from 'styled-components';

export const WDWrap = styled.section`
  margin: 50px 0;
  .wd-header {
    margin-bottom: 20px;
  }
`;

export const WDTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  font-family: var(--secondary-font);
`;

export const WDImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const WDContent = styled.div`
  word-break: break-word;
  margin-top: 50px;
  @media (max-width: 991px) {
    margin-top: 0px;
  }
`;

export const WDMeta = styled.div``;

export const WDDescription = styled.div`
  color: var(--dark);
  margin: 30px 0 20px;
`;

export const WDLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .1rem;
`;

export const WDValue = styled.span`
  display: block;
  font-size: 16px;
  a {
    color: var(--primary);
    text-decoration: none;
  }
`;
