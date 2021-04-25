import styled from 'styled-components';

export const CF = styled.form`
  max-width: 768px;
  margin: 1rem auto;
  text-align: center;
`;

export const CFInput = styled.input`
  border: none;
  font-size: 16px;
  height: 45px;
  padding-left: 0;
  padding-right: 0;
  background: transparent;
  border-bottom: 1px solid var(--dark);
  border-radius: 0;
  transition: 0.5s;
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: none;
    background: transparent;
  }
`;

export const CFTextArea = styled(CFInput).attrs({
  as: 'textarea',
})`
  display: block;
  font-family: var(--secondary-font);
  width: 100%;
  margin: 1rem 0;
  min-height: 150px;
  resize: vertical;
`;
