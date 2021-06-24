import logoImg from '../../assets/logo.svg';
import { RoomCode } from '../RoomCode';

import * as S from './styles';

type HeaderProps = {
  roomId: string;
};

export function Header({ roomId }: HeaderProps): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="Logo" />

        <div>
          <RoomCode code={roomId} />

          <S.SignOutRoomButton>Encerrar sala</S.SignOutRoomButton>
        </div>
      </S.Content>
    </S.Container>
  );
}
