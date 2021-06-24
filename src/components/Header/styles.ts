import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    border-bottom: 1px solid ${theme.colors.grayLight};
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

  img {
    max-width: 10rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const SignOutRoomButton = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    padding: 0 2.4rem;
    border: none;
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.primary};
    background: transparent;

    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-weight: 500;
  `}
`;
