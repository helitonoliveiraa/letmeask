import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: ${theme.colors.white};

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

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        object-fit: cover;
      }

      strong {
        font-size: 1.4rem;
        color: ${theme.colors.grayDark};
        margin-left: 0.8rem;
      }
    }

    div {
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
    }
  `}
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    button {
      ${buttonStyled}

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors.grayDark};
      }

      &:hover {
        background: ${lighten(0.55, theme.colors.primary)};

        svg {
          color: ${theme.colors.primary};
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
