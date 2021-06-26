import { FormEvent, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { Input } from '../../components/Input';
import { ToggleButton } from '../../components/ToggleButton';

import illustrationImg from '../../assets/illustration.svg';
import { LogoLight, LogoDark } from '../../assets/index';

import * as S from './styles';

export function Home(): JSX.Element {
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const { theme } = useTheme();

  async function handleCreateRoom() {
    try {
      if (!user) {
        await signInWithGoogle();
      }

      history.push('/rooms/new');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().closedAt) {
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <S.Container>
      <S.Banner>
        <img src={illustrationImg} alt="Illustration" />

        <strong>Toda pergunta tem uma resposta.</strong>

        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </S.Banner>

      <S.LoginContainer>
        <ToggleButton />
        <div>
          {theme === 'light' ? <LogoDark /> : <LogoLight />}

          <S.GoogleButton onClick={handleCreateRoom}>
            <FaGoogle />
            Crie sua sala com o Google
          </S.GoogleButton>

          <form onSubmit={handleJoinRoom}>
            <span>ou entre em uma sala</span>

            <Input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />

            <S.ComeInButton>
              <FiLogIn />
              Entrar na sala
            </S.ComeInButton>
          </form>
        </div>
      </S.LoginContainer>
    </S.Container>
  );
}
