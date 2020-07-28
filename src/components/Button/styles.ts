import styled, { css } from 'styled-components';

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: #ff9000;
  color: #312e38;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${(props) =>
    props.loading &&
    css`
      background: #666;
      cursor: unset;

      svg {
        animation: spin 4s linear 0s infinite normal;
        color: #ff9000;
      }
    `}

  height: 56px;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  width: 100%;
  font-weight: 500;

  margin-top: 16px;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
