import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 1rem;
  padding: 1.6rem;
  width: 100%;
  border: 2px solid #232129;
  color: #f4ede8;

  svg {
    color: #666360;
    margin-right: 16px;
  }

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: #ff9000;
      }
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}


  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  svg:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
