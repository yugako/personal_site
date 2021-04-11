import styled from "styled-components";

export const WorkItemOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  opacity: 0;
  transition: opacity 0.5s ease-in;

`;

export const WorkItemWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover ${WorkItemOverlay}{
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

export const WorkItemContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: left;
  
  h3 {
    color: var(--light);
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0;
  }
`;
