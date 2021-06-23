import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../../components/Input';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

export function Home(): JSX.Element {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    try {
      if (!user) {
        await signInWithGoogle();
      }

      history.push('/room/new');
    } catch (err) {
      console.log(err);
    }
  }

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

          <S.GoogleButton onClick={handleCreateRoom}>
            <FaGoogle />
            Crie sua sala com o Google
          </S.GoogleButton>

          <form action="">
            <span>ou entre em uma sala</span>

            <Input type="text" placeholder="Digite o código da sala" />

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
