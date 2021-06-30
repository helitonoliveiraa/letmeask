import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { Button } from '../../components/Button';

export const Container = styled.main`
  max-width: 820px;
  width: 100%;
  margin: 0 auto 4rem;
  padding: 0 2rem;
`;

export const ContentHeader = styled.section`
  ${({ theme }) => css`
    margin-top: 6.4rem;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
      font-weight: bold;
      color: ${theme.colors.black};
      margin-right: 1.6rem;
    }

    span {
      padding: 0.8rem 1.6rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.background};
      background: ${lighten(0.15, theme.colors.primary)};
      border-radius: 5rem;
    }
  `}
`;

export const ContentBody = styled.section`
  ${({ theme }) => css`
    width: 100%;

    form {
      margin-top: 2.4rem;
      margin-bottom: 3.2rem;

      textarea {
        width: 100%;
        padding: 1.6rem;
        border: none;
        border-radius: 0.8rem;
        background: ${theme.colors.details};
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
        font-size: 1.6rem;
        color: ${theme.colors.primary};
        line-height: 2.4;
        resize: vertical;
        min-height: 13rem;

        &::placeholder {
          font-size: 1.6rem;
          color: ${theme.colors.grayDark};
        }

        &:focus {
          border: 2px solid ${theme.colors.primary};
          padding: 1.4rem;
        }

        outline-color: ${theme.colors.primary};
        -moz-outline-radius: 0.8rem;
      }

      div {
      }
    }
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;

    p {
      font-size: 1.4rem;
      font-weight: 500;
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
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
    }

    strong {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.black};
      margin-left: 0.8rem;
    }
  `}
`;

export const SendQuestionButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    margin-left: auto;

    &:not(:disabled):hover {
      background: ${lighten(0.07, theme.colors.primary)};
    }
  `}
`;
