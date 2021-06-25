import { useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { RoomCode } from '../RoomCode';

import * as S from './styles';

type HeaderProps = {
  roomId: string;
  endRoom?: () => void;
};

export function Header({ roomId, endRoom }: HeaderProps): JSX.Element {
  const { pathname } = useLocation();

  const isAdmin = pathname === `/admin/rooms/${roomId}`;

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="Logo" />

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
