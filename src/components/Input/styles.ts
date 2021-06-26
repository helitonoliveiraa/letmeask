import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    border: 1px solid ${theme.colors.grayMedium};
    border-radius: 0.8rem;
    padding: 0 1.6rem;
    font-size: 1.6rem;
    color: ${darken(0.2, theme.colors.primary)};

    &::placeholder {
      font-size: 1.6rem;
      color: ${theme.colors.grayMedium};
    }

    &:focus {
      border: 2px solid ${theme.colors.primary};
      padding: 0 1.5rem;
    }

    outline-color: ${theme.colors.primary};
    -moz-outline-radius: 0.8rem;
    outline: none;
  `}
`;
