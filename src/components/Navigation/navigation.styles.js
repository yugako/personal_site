import styled from "styled-components";

export const HamburgerWrapper = styled.div`
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    .top {
      stroke-dasharray: 40 172;
    }

    .middle {
      stroke-dasharray: 40 111;
    }

    .bottom {
      stroke-dasharray: 40 172;
    }

    .hamRotate.active {
      transform: rotate(45deg);
    }
    .hamRotate180.active {
      transform: rotate(180deg);
    }
    .line {
      fill:none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke:#000;
      stroke-width:5.5;
      stroke-linecap:round;
    }
    
    &.active {
      .top {
        stroke-dashoffset: -132px;
      }

      .middle {
        stroke-dashoffset: -71px;
      }

      .bottom {
        stroke-dashoffset: -132px;
      }
    } 
  }


`;
