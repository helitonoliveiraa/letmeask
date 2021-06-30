import { useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { RoomCode } from '../RoomCode';
import { LogoLight, LogoDark } from '../../assets/index';

import * as S from './styles';

type HeaderProps = {
  roomId: string;
  endRoom?: () => void;
};

export function Header({ roomId, endRoom }: HeaderProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const { theme } = useTheme();

  const isAdmin = pathname === `/admin/rooms/${roomId}`;

  function handleToggleMenu() {
    setOpen(prevState => !prevState);
  }

  return (
    <S.Container>
      <S.Content>
        {theme === 'light' ? <LogoDark /> : <LogoLight />}

        <S.ToggleButtonStyled />

        <button id="drower" type="button" onClick={handleToggleMenu}>
          <FiMenu />
        </button>

        <div className={open ? 'active' : 'left'}>
          <RoomCode code={roomId} />

          {isAdmin && (
            <S.SignOutRoomButton onClick={endRoom}>
              Encerrar sala
            </S.SignOutRoomButton>
          )}
        </div>
      </S.Content>
    </S.Container>
  );
}
