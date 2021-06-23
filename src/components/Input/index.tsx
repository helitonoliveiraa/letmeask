import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps): JSX.Element {
  return <S.Container {...rest} />;
}
