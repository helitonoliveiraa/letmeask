import { useLocation } from 'react-router-dom';
import {
  FiThumbsUp,
  FiCheckCircle,
  FiMessageSquare,
  FiTrash,
} from 'react-icons/fi';

import * as S from './styles';

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likesCount: number;
  likeId: string | undefined;
};

type QuestionProps = {
  question: QuestionType;
  roomId?: string;
  likeQuestion?: (questionId: string, likeId: string | undefined) => void;
  deleteQuestion?: (questionId: string) => void;
  checkQuestion?: (questionId: string) => void;
  hightLightQuestion?: (questionId: string) => void;
};

export function Question({
  question,
  roomId,
  likeQuestion,
  deleteQuestion,
  checkQuestion,
  hightLightQuestion,
}: QuestionProps): JSX.Element {
  const { pathname } = useLocation();

  const isAdmin = pathname === `/admin/rooms/${roomId}`;

  return isAdmin ? (
    <S.Container
      isHightLight={question.isHighlighted}
      isAnswered={question.isAnswered}
    >
      <p>{question.content}</p>

      <S.Footer
        isHightLight={question.isHighlighted}
        isAnswered={question.isAnswered}
      >
        <div>
          <img src={question.author.avatar} alt={question.author.name} />
          <span>{question.author.name}</span>
        </div>

        <S.WrapperButton
          isHightLight={question.isHighlighted}
          isAnswered={question.isAnswered}
        >
          <button
            type="button"
            disabled={question.isAnswered}
            className="check"
            onClick={() => checkQuestion && checkQuestion(question.id)}
          >
            <FiCheckCircle />
          </button>

          {!question.isAnswered && (
            <button
              type="button"
              className="hightlight"
              onClick={() =>
                hightLightQuestion && hightLightQuestion(question.id)
              }
            >
              <FiMessageSquare />
            </button>
          )}

          <button
            type="button"
            className="delete"
            onClick={() => deleteQuestion && deleteQuestion(question.id)}
          >
            <FiTrash />
          </button>
        </S.WrapperButton>
      </S.Footer>
    </S.Container>
  ) : (
    <S.Container
      isHightLight={question.isHighlighted}
      isAnswered={question.isAnswered}
    >
      <p>{question.content}</p>

      <S.Footer
        isHightLight={question.isHighlighted}
        isAnswered={question.isAnswered}
      >
        <div>
          <img src={question.author.avatar} alt={question.author.name} />
          <span>{question.author.name}</span>
        </div>

        <S.UserbuttonContainer>
          {question.likesCount > 0 && <span>{question.likesCount}</span>}

          {!question.isAnswered && (
            <button
              type="button"
              onClick={() =>
                // eslint-disable-next-line implicit-arrow-linebreak
                likeQuestion && likeQuestion(question.id, question.likeId)
              }
              className={question.likeId ? 'liked' : ''}
            >
              <FiThumbsUp />
            </button>
          )}
        </S.UserbuttonContainer>
      </S.Footer>
    </S.Container>
  );
}
