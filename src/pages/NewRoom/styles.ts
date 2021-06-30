import styled, { css } from 'styled-components';
import { Button } from '../../components/Button';
import { ToggleButton } from '../../components/ToggleButton';

export const ToggleButtonStyled = styled(ToggleButton)`
  position: absolute;
  top: 1rem;
  right: 5rem;

  @media (max-width: 500px) {
    top: 0.5rem;
    right: 1.4rem;
  }
`;

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

export const LoginContainer = styled.main`
  ${({ theme }) => css`
    height: 100vh;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    div {
      max-width: 320px;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;

      > svg {
        max-width: 154px;
        margin: 0 auto;
      }

      strong {
        margin-top: 5.6rem;
        font-size: 2.4rem;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        color: ${theme.colors.black};
      }

      form {
        display: flex;
        flex-direction: column;
        text-align: center;

        margin-top: 2.4rem;
      }

      p {
        margin-top: 1.6rem;
        font-size: 1.4rem;
        color: ${theme.colors.grayDark};

        a {
          color: ${theme.colors.primary};
          text-decoration: underline;
          margin-left: 0.4rem;

          &:hover {
            color: ${theme.colors.secondary};
          }
        }
      }
    }

    @media (max-width: 870px) {
      position: static;
    }

    @media (max-width: 500px) {
      flex: 0.8;
      height: 100%;
      padding: 2rem 2rem 0;
      align-items: start;
    }
  `}
`;

export const CreateRoomButton = styled(Button)`
  margin-top: 1.6rem;
`;
