import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';
import { Button } from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const Banner = styled.aside`
  ${({ theme }) => css`
    max-width: 680px;
    width: 100%;
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    padding-left: 8.4rem;

    background: ${theme.colors.grandient};
    color: ${theme.colors.white};

    img {
      max-width: 31.3rem;
    }

    strong {
      margin-top: 0.8rem;
      font-family: 'Poppins';
      font-weight: bold;
      font-size: 3.6rem;
      line-height: 4.2rem;
      max-width: 40rem;
    }

    p {
      margin-top: 1.6rem;
      font-size: 2.4rem;
      line-height: 3.2rem;
      max-width: 42rem;
      opacity: 0.7;
      ${theme.colors.background};
    }

    @media (max-width: 870px) {
      max-width: 100%;
      height: auto;
      flex: 0.5;
      padding: 2rem 8.4rem;

      img {
        max-width: 20rem;
      }
    }

    @media (max-width: 500px) {
      flex: 0.4;
      padding: 0 2rem;

      strong {
        margin-top: 0.8rem;
        font-size: 2.4rem;
        line-height: 3.6rem;
        max-width: 30rem;
        position: absolute;
        text-align: right;
        top: 4rem;
        right: 2rem;
      }

      p {
        margin-top: 1rem;
        font-size: 1.8rem;
        line-height: 2.4rem;
        max-width: 42rem;
        max-width: 28rem;
        position: absolute;
        text-align: right;
        top: 14rem;
        right: 2rem;
      }

      img {
        max-width: 15rem;
      }
    }
  `}
`;

const APPEAR_FROM_TOP = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const APPEAR_FROM_RIGHT = keyframes`
  from {
    opacity: 0;
    transform: translatex(5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const LoginContainer = styled.main`
  ${({ theme }) => css`
    height: 100vh;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      max-width: 320px;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;

      animation: ${APPEAR_FROM_RIGHT} 1s ease-in-out;

      > svg {
        max-width: 154px;
        margin: 0 auto;

        animation: ${APPEAR_FROM_TOP} 1s ease-in-out;
      }

      form {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;

        padding-top: 4rem;
        margin-top: 4rem;
        border-top: 1px solid ${theme.colors.grayMedium};

        span {
          position: absolute;
          top: -1rem;
          left: 20%;
          right: 20%;
          width: 60%;
          background-color: ${theme.colors.background};
          color: ${theme.colors.grayMedium};
          align-self: center;
        }
      }
    }

    @media (max-width: 500px) {
      flex: 0.8;
      height: 100%;
      padding: 2rem 2rem 0;
      align-items: start;
    }
  `}
`;

export const GoogleButton = styled.button`
  ${({ theme }) => css`
    margin-top: 5.6rem;
    height: 5rem;
    border: none;
    border-radius: 0.8rem;
    padding: 0 2rem;

    background: ${theme.colors.red};
    color: ${theme.colors.details};
    font-size: 1.6rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.1, theme.colors.red)};
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.details};
      margin-right: 0.8rem;
    }

    @media (max-width: 500px) {
      margin-top: 3rem;
    }
  `}
`;

export const ComeInButton = styled(Button)`
  margin-top: 1.6rem;
`;
