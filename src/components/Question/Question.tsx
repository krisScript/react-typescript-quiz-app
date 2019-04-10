import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect
} from 'react';
import IQuestion from '../../types/Question';
import { observer } from 'mobx-react-lite';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RootStoreContext from '../../stores/RootStore';
import AnswerButton from './AnswerButton';
interface MatchParams {
  questionId: string;
}

interface QuestionProps extends RouteComponentProps<MatchParams> {
  questionId: string;
}
const Question: FunctionComponent<QuestionProps> = observer(
  ({ history, match }) => {
    const [question, setQuestion] = useState<IQuestion>({
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: []
    });
    const [answers, setAnswers] = useState<string[]>([]);
    const { questionsStore, answersStore } = useContext(RootStoreContext);
    const { questionId } = match.params;
    questionsStore.setCurrentQuestion(Number(questionId));
    useEffect(() => {
      const { currentQuestion } = questionsStore;
      setQuestion(currentQuestion);
      setAnswers([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer
      ]);
    },[]);

    const answerQuestionHandler = (answer: string): void => {
      const isCorrect = answer === question.correct_answer ? true : false;
        const questionAnswer = {
          correctAnswer: question.correct_answer,
          userAnswer: answer,
          isCorrect,
          question: question.question,
          difficulty: question.difficulty
        };
        answersStore.answerQuestion(questionAnswer);
      if (Number(questionId) + 1 < questionsStore.maxQuestions) {
        const nextQuestionId = Number(questionId) + 1;
        questionsStore.setCurrentQuestion(nextQuestionId);
        setQuestion(questionsStore.currentQuestion)
        setAnswers([
          ...questionsStore.currentQuestion.incorrect_answers,
          questionsStore.currentQuestion.correct_answer
        ])
        history.replace(`/question/${nextQuestionId}`);
      }else if(Number(questionId ) + 1 === questionsStore.maxQuestions) {
        history.replace(`/game-over`);
      }
    };
    return (
      <div className="question">
      <h1 className={`${question.difficulty}-bg question-text`}>{question.question}</h1>
        <div className="buttons-container">
          {answers.map((answer, index) => (
            <AnswerButton
              key={index}
              answer={answer}
              answerQuestionHandler={answerQuestionHandler}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default withRouter(Question);
