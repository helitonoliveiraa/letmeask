import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import { Input } from '../../components/Input';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

export function SignIn(): JSX.Element {
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

          <S.GoogleButton>
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
