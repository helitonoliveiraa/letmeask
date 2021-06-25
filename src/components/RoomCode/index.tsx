import { FiCopy } from 'react-icons/fi';

import * as S from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <S.Container onClick={copyRoomCodeToClipboard}>
      <span>
        <FiCopy />
      </span>
      <strong>Sala #{code}</strong>
    </S.Container>
  );
}
