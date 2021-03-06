import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { Input } from '../../components/Input';
import { ToggleButton } from '../../components/ToggleButton';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/illustration.svg';
import { LogoLight, LogoDark } from '../../assets/index';

import * as S from './styles';

export function NewRoom(): JSX.Element {
  const [newRoom, setNewRoom] = useState('');

  const history = useHistory();
  const { user } = useAuth();
  const { theme } = useTheme();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const { key } = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${key}`);
  }

  return (
    <S.Container>
      <S.Banner>
        <img src={illustrationImg} alt="Illustration" />

        <strong>Toda pergunta tem uma resposta.</strong>

        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </S.Banner>

      <S.LoginContainer>
        <S.ToggleButtonStyled />
        <div>
          {theme === 'light' ? <LogoDark /> : <LogoLight />}

          <strong>Crie uma nova sala</strong>

          <form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={event => setNewRoom(event.target.value)}
            />

            <S.CreateRoomButton>Entrar na sala</S.CreateRoomButton>
          </form>

          <p>
            Quer entrar em uma sala já existente?
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </S.LoginContainer>
    </S.Container>
  );
}
