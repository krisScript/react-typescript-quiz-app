import React ,{FunctionComponent,useContext,useState,useEffect}from 'react'; 
import IQuestion from '../../types/Question'
import { observer } from 'mobx-react-lite'
import {withRouter,RouteComponentProps} from 'react-router-dom'
import RootStoreContext from '../../stores/RootStore';
import AnswerButton from './AnswerButton';
interface MatchParams {
  questionId:string
}

interface QuestionProps extends RouteComponentProps<MatchParams> {
  questionId:string
}
const Question : FunctionComponent<QuestionProps> = observer(({history,match}) => {
  const [question,setQuestion] = useState<IQuestion >({category:'', type:'',
  difficulty:'',
  question:'',
  correct_answer:'',
  incorrect_answers:[]})
  const [answers,setAnswers] = useState<string[] >([])
  const {  questionsStore } = useContext(RootStoreContext);
  const {questionId}   = match.params
  questionsStore.setCurrentQuestion(Number(questionId))
  useEffect(() => {
    const {currentQuestion} = questionsStore
    setQuestion(currentQuestion)
    setAnswers([...currentQuestion.incorrect_answers,currentQuestion.correct_answer])
    console.log(answers)
  },[])
  return (
    
      <div className="question">
      <h1>{question.question}</h1>
      <div className="buttons-container">
      {answers.map((answer,index) => <AnswerButton key={index} answer={answer} />)}
      </div>
      </div>
  )
})

export default withRouter(Question)
