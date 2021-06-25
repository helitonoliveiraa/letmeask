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

export function AdminRoom(): JSX.Element {
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      const questionRef = await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
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
          {questions &&
            questions.map(question => (
              <QuestionComponent
                key={question.id}
                question={question}
                roomId={roomId}
                deleteQuestion={handleDeleteQuestion}
              />
            ))}
        </S.ContentBody>
      </S.Container>
    </>
  );
}
