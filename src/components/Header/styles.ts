import styled, { css } from 'styled-components';
import { Button } from '../Button';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    border-bottom: 1px solid ${theme.colors.headerLine};
  `}
`;

export const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 9rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    max-width: 10rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const SignOutRoomButton = styled(Button)`
  ${({ theme }) => css`
    height: 4rem;
    padding: 0 2.4rem;
    border: none;
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.primary};
    background: transparent;

    color: ${theme.colors.primary};
    font-weight: 500;

    &:not(:disabled):hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`;
