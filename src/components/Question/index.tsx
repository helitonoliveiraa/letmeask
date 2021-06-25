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
};

export function Question({
  question,
  roomId,
  likeQuestion,
  deleteQuestion,
}: QuestionProps): JSX.Element {
  const { pathname } = useLocation();

  const isAdmin = pathname === `/admin/rooms/${roomId}`;

  return isAdmin ? (
    <S.Container>
      <p>{question.content}</p>

      <S.Footer>
        <div>
          <img src={question.author.avatar} alt={question.author.name} />
          <strong>{question.author.name}</strong>
        </div>

        <S.WrapperButton>
          <button type="button">
            <FiCheckCircle />
          </button>

          <button type="button">
            <FiMessageSquare />
          </button>

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
    <S.Container>
      <p>{question.content}</p>

      <S.Footer>
        <div>
          <img src={question.author.avatar} alt={question.author.name} />
          <strong>{question.author.name}</strong>
        </div>

        <div>
          {question.likesCount > 0 && <span>{question.likesCount}</span>}
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
        </div>
      </S.Footer>
    </S.Container>
  );
}
