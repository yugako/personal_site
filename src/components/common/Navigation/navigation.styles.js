import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  z-index:  ${({ isActive }) => (isActive ? 12 : 1)};
  
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
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, stroke 400ms;
      stroke: ${({ isActive }) => (isActive ? 'var(--light)' : 'var(--dark)')};
      stroke-width:5.5;
      stroke-linecap:round;
      transition-delay: 0.7s;
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

export const MenuDrawerWrap = styled.nav`
  position: fixed;
  width: 320px;
  background-color: var(--light);
  z-index: 12;
  height: 100%;
  left: ${({ isActive }) => (isActive ? 0 : '-100%')};
  top: 0;
  transition: left 0.5s;
  box-sizing: border-box;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 415px) {
    width: 280px;
    padding: 15px;
  }

  @media (max-width: 320px) {
    width: 240px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const MenuItem = styled.li``;
export const MenuLink = styled.a`
  padding: 5px 0px;
  display: block;
  position: relative;
  color: var(--dark);
  text-decoration: none;
  transition: color 0.5s ease-in;
  &:hover {
    color: var(--primary);
    transition: color 0.5s ease-in;
  }
`;

export const BackdropWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  opacity: .6;
  top: 0;
  left: ${({ isActive }) => (isActive ? 0 : '150%')};
  transition: left 0.5s ease-out;
  transition-delay: 0.5s;
`;
