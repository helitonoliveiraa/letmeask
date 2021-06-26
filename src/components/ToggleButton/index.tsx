import { ButtonHTMLAttributes } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../hooks/useTheme';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleButton({ ...rest }: ButtonProps): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Container {...rest} onClick={toggleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </S.Container>
  );
}
