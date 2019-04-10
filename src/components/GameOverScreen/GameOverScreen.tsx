import React ,{FunctionComponent,SyntheticEvent,useState,useContext,useEffect}from 'react';
import { observer } from 'mobx-react-lite'
import RootStoreContext from '../../stores/RootStore';
import {withRouter,RouteComponentProps} from 'react-router-dom'
import IAnswer from '../../types/Answer'
import Answer from './Answer';
const GameOverScreen : FunctionComponent<RouteComponentProps> = observer(({history}) => {
  const [answers,setAnswers] = useState<IAnswer[]>([])
  const {answersStore,questionsStore} = useContext(RootStoreContext)
  useEffect(() => {
   setAnswers(answersStore.answers)
  },[])
  const restartHandler = () => {
    answersStore.emptyAnswers()
    questionsStore.emptyQuestions()
    history.replace('/')
  }
  return (
      <div className="game-over-screen">
      <h1>Game Over</h1>
      {answers ? <div className="answers-container">{answers.map((answer,index) => <Answer key={`${index}-${answer.correctAnswer}`}  answer={answer}/> )}</div> : ''}
      <button onClick={restartHandler} className="button">Restart</button>
      </div>
  )
})

export default withRouter(GameOverScreen);
