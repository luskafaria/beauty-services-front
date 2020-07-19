import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  color: #312e38;
  width: 100%;
  font-weight: 500;

  margin-top: 16px;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
