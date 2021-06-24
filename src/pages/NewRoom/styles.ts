import styled, { css } from 'styled-components';
// import { darken } from 'polished';
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

      img {
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
  `}
`;

export const CreateRoomButton = styled(Button)`
  margin-top: 1.6rem;
`;
