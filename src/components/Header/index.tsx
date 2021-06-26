import { useLocation } from 'react-router-dom';

import { useTheme } from '../../hooks/useTheme';
import { RoomCode } from '../RoomCode';
import { ToggleButton } from '../ToggleButton';
import { LogoLight, LogoDark } from '../../assets/index';

import * as S from './styles';

type HeaderProps = {
  roomId: string;
  endRoom?: () => void;
};

export function Header({ roomId, endRoom }: HeaderProps): JSX.Element {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  const isAdmin = pathname === `/admin/rooms/${roomId}`;

  return (
    <S.Container>
      <ToggleButton />

      <S.Content>
        {theme === 'light' ? <LogoDark /> : <LogoLight />}

        <div>
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
