import styled, {createGlobalStyle, css} from "styled-components";

export const LayoutStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&family=Roboto+Mono&display=swap');
  
  :root {
    --dark: #000000;
    --primary: #1b9cfc;
    --gray: #aaaaaa;
    --primary-font: 'Roboto Mono', monospace;
    --secondary-font: 'Mulish', sans-serif;
  }
  
  body {
    font-family: var(--primary-font);
  }
  
  p {
    line-height: 1.5;
    font-size: 18px;
  }

  .t-primary {
    color: var(--primary);
  }
`;

function randomHeight() {
    let styles = '';

    for (let i = 0; i < 20; i += 1) {
        const random = Math.floor(Math.random()*400 + 200);
        styles += `
          div:nth-child(${i}) {
            height: ${random}px;
            line-height: ${random}px;
          }
     `
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
  align-items: ${({vertical}) => vertical || 'center'};
  justify-content: ${({horizontal}) => horizontal || 'flex-start'};
`;

export const Masonry = styled.div`
  columns: 3 200px;
  column-gap: 1rem;
  div {
    color: white;
    width: 100%;
    margin: 0 1rem 1rem 0;
    display: inline-block;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
  }

  ${randomHeight()};
`;
