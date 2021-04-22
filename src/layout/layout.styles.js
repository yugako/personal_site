import styled, { createGlobalStyle, css } from 'styled-components';

export const LayoutStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&family=Roboto+Mono&display=swap');
  
  :root {
    --dark: #212529;
    --light: #ffffff;
    --primary: #1b9cfc;
    --gray: #aaaaaa;
    --primary-font: 'Roboto Mono', monospace;
    --secondary-font: 'Mulish', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--primary-font);
  }
  
  p {
    line-height: 1.5;
    font-size: 18px;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .t-primary {
    color: var(--primary);
  }
`;

function randomHeight() {
  let styles = '';

  for (let i = 0; i < 20; i += 1) {
    const random = Math.floor(Math.random() * 400 + 200);
    styles += `
          & > div:nth-child(${i}) {
            @media (min-width: 1024px) {
                height: ${random}px;
            }
          }
     `;
  }

  return css`${styles}`;
}

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
      max-width:540px;
  }

  @media (min-width: 768px) {
      max-width:720px;
  }

  @media (min-width: 992px) {
      max-width:960px;
  }

  @media (min-width: 1200px) {
      max-width:1140px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ vertical }) => vertical || 'center'};
  justify-content: ${({ horizontal }) => horizontal || 'flex-start'};
`;

export const Masonry = styled.div`
  columns: 3 200px;
  column-gap: 1rem;
  ${randomHeight()};
  & > div {
    color: white;
    width: 100%;
    margin: 0 1rem 1rem 0;
    display: inline-block;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: ${({ vertical }) => vertical || 'initial'};
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr'};
  gap: ${({ gap }) => gap || 20}px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const SectionWrap = styled.section`
  margin-top: 7.5rem;
  @media (max-width: 1024px) {
    margin-top: 5rem;
  }
  @media (max-width: 576px) {
    margin-top: 2.5rem;
  }
`;
