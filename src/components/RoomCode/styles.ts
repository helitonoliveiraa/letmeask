import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 4rem;
    background: transparent;
    border: 1px solid ${theme.colors.primary};
    border-radius: 0.8rem;

    strong {
      margin: 0 1.2rem;
      font-size: 1.4rem;
      color: ${theme.colors.black};
    }

    span {
      width: 4.4rem;
      height: 4rem;
      background: ${theme.colors.primary};
      border-radius: 0.8rem 0 0 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors.background};
      }
    }

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 600px) {
      max-width: 20rem;

      strong {
        max-width: 40%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}
`;
