/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

type visualFeedbackProps = {
  isHightLight?: boolean;
  isAnswered?: boolean;
};

export const Container = styled.section<visualFeedbackProps>`
  ${({ theme, isHightLight, isAnswered }) => css`
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid
      ${isHightLight
        ? theme.colors.primary
        : isAnswered
        ? theme.colors.grayLight
        : theme.colors.white};

    background: ${isHightLight
      ? lighten(0.68, theme.colors.primary)
      : isAnswered
      ? theme.colors.grayLight
      : theme.colors.white};

    & + & {
      margin-top: 0.8rem;
    }

    p {
      color: ${theme.colors.black};
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  `}
`;

const buttonStyled = css`
  border: none;
  border-radius: 0.8rem;
  background: transparent;
  margin-left: 0.8rem;
  padding: 0.4rem;

  transition: all 0.1s ease-in-out;
`;

export const WrapperButton = styled.div<visualFeedbackProps>`
  ${({ theme, isHightLight, isAnswered }) => css`
    display: flex;
    align-items: center;

    button {
      ${buttonStyled}

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors.grayDark};
      }

      &:not(:disabled):hover {
        background: ${lighten(0.55, theme.colors.primary)};

        svg {
          color: ${theme.colors.primary};
        }
      }

      &:disabled {
        cursor: not-allowed;
      }

      &.check {
        svg {
          color: ${isAnswered && theme.colors.primary};
        }
      }

      &.hightlight {
        svg {
          color: ${isHightLight && theme.colors.primary};
        }
      }

      &.delete {
        svg {
          color: ${theme.colors.grayDark};
        }

        &:hover {
          background: ${lighten(0.35, theme.colors.danger)};

          svg {
            color: ${theme.colors.danger};
          }
        }
      }
    }
  `}
`;

export const Footer = styled.footer<visualFeedbackProps>`
  ${({ theme, isHightLight, isAnswered }) => css`
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        object-fit: cover;

        ${isAnswered &&
        css`
          opacity: 0.3;
        `}
      }

      span {
        font-size: 1.4rem;
        color: ${isHightLight ? theme.colors.black : theme.colors.grayDark};
        margin-left: 0.8rem;
      }
    }

    div {
    }
  `}
`;

export const UserbuttonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      color: ${theme.colors.grayDark};
    }

    button {
      ${buttonStyled}

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors.grayDark};
      }

      &.liked {
        svg {
          color: ${theme.colors.primary};
        }
      }

      &:hover {
        background: ${lighten(0.55, theme.colors.primary)};

        svg {
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;
