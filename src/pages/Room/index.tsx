import { FormEvent, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import * as S from './styles';

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

type RoomParams = {
  id: string;
};

export function Room(): JSX.Element {
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }),
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <>
      <Header roomId={roomId} />
      <S.Container>
        <S.ContentHeader>
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{' '}
              {questions.length > 1 ? 'perguntas' : 'pergunta'}
            </span>
          )}
        </S.ContentHeader>

        <S.ContentBody>
          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              value={newQuestion}
              onChange={event => setNewQuestion(event.target.value)}
            />

            <S.InfoWrapper>
              {user ? (
                <S.UserInfo>
                  <img src={user.avatar} alt={user.name} />
                  <strong>{user.name}</strong>
                </S.UserInfo>
              ) : (
                <p>
                  Para enviar uma pergunta,
                  <Link to="/">faça seu login</Link>.
                </p>
              )}

              <S.SendQuestionButton type="submit" disabled={!user}>
                Enviar pergunta
              </S.SendQuestionButton>
            </S.InfoWrapper>
          </form>
        </S.ContentBody>
      </S.Container>
    </>
  );
}
