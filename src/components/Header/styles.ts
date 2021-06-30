import styled, { css, keyframes } from 'styled-components';
import { Button } from '../Button';
import { ToggleButton } from '../ToggleButton';

export const ToggleButtonStyled = styled(ToggleButton)`
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 700px) {
    margin-right: 6rem;
  }
`;

const APPEAR_FROM_RIGHT = keyframes`
  from {
    opacity: 0;
    transform: translateX(5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    border-bottom: 1px solid ${theme.colors.headerLine};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1140px;
    width: 100%;
    height: 9rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button#drower {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: transparent;
      position: fixed;
      right: 1rem;
      z-index: 15;
      display: flex;
      align-items: center;
      justify-content: center;

      display: none;
      svg {
        width: 24px;
        height: 24px;
        color: ${theme.colors.primary};
      }
    }

    svg {
      max-width: 10rem;
    }

    div {
      display: flex;
      align-items: center;

      @media (max-width: 700px) {
        &.active {
          width: 60%;
          height: 100vh;
          flex-direction: column;
          align-items: flex-end;
          gap: 2rem;

          padding: 10rem 2rem;

          z-index: 5;

          animation: ${APPEAR_FROM_RIGHT} 1s;

          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;

          background: ${theme.colors.backgrounDrawer};
        }
      }
    }

    @media (max-width: 700px) {
      button#drower {
        display: flex;
      }

      div {
        display: none;

        &.active {
          display: flex;
          /* flex-direction: column; */
        }
      }
    }
  `}
`;

export const SignOutRoomButton = styled(Button)`
  ${({ theme }) => css`
    height: 4rem;
    padding: 0 2.4rem;
    margin-left: 0.8rem;
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

    @media (max-width: 700px) {
      max-width: 20rem;
      width: 100%;
    }
  `}
`;
