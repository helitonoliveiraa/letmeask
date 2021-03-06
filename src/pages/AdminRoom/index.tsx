import { useHistory, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Question as QuestionComponent } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import * as S from './styles';

type RoomParams = {
  id: string;
};

export function AdminRoom(): JSX.Element {
  const params = useParams<RoomParams>();
  const history = useHistory();

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      const questionRef = await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighLightQuestion(questionId: string) {
    console.log('hightlight!');
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <>
      <Header roomId={roomId} endRoom={handleEndRoom} />
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
                checkQuestion={handleCheckQuestionAsAnswered}
                hightLightQuestion={handleHighLightQuestion}
              />
            ))}
        </S.ContentBody>
      </S.Container>
    </>
  );
}
