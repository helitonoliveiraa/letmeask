import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Button } from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
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
  `}
`;

export const LoginContainer = styled.section`
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

      img {
        max-width: 154px;
        margin: 0 auto;
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
  `}
`;

export const GoogleButton = styled(Button)`
  ${({ theme }) => css`
    margin-top: 5.6rem;
    background: ${theme.colors.red};

    &:hover {
      background: ${darken(0.1, theme.colors.red)};
    }
  `}
`;

export const ComeInButton = styled(Button)`
  margin-top: 1.6rem;
`;
