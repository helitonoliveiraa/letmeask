import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    height: 5rem;
    border: none;
    border-radius: 0.8rem;
    padding: 0 2rem;

    background: ${theme.colors.secondary};
    color: ${theme.colors.details};
    font-size: 1.6rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
      background: ${lighten(0.2, theme.colors.secondary)};
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.details};
      margin-right: 0.8rem;
    }
  `}
`;
