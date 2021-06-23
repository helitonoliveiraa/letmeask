import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';
import { useAuth } from '../../contexts/AuthContext';

export function NewRoom(): JSX.Element {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Banner>
        <img src={illustrationImg} alt="Illustration" />

        <strong>Toda pergunta tem uma resposta.</strong>

        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </S.Banner>

      <S.LoginContainer>
        <div>
          <img src={logoImg} alt="Logo" />

          <strong>Crie uma nova sala</strong>

          <form action="">
            <Input type="text" placeholder="Nome da sala" />

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
