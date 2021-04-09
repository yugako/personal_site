import styled from "styled-components";

export const ButtonWrap = styled.button`
  background: var(--dark);
  color: var(--light);
  padding: 14px 20px;
  border-radius: 0;
  font-size: 14px;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1.5;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    border-color: var(--dark);
    background: transparent;
    color: var(--dark);
  }
`;
