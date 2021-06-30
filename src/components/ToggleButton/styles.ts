import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    padding: 1rem;
    border: none;
    border-radius: 50%;
    font-size: 0;
    background: transparent;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.primary};
    }

    &:hover svg {
      color: ${darken(0.2, theme.colors.primary)};
    }
  `}
`;
