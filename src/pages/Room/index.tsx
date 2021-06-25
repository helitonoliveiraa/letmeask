import { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Question as QuestionComponent } from '../../components/Question';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import * as S from './styles';

type RoomParams = {
  id: string;
};

export function Room(): JSX.Element {
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

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

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined,
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
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

          {questions &&
            questions.map(question => (
              <QuestionComponent
                key={question.id}
                question={question}
                likeQuestion={handleLikeQuestion}
              />
            ))}
        </S.ContentBody>
      </S.Container>
    </>
  );
}
