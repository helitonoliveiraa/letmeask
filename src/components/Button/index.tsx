import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return <S.Container {...rest}>{children}</S.Container>;
}
