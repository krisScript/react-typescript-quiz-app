import React ,{FunctionComponent,SyntheticEvent,useState,useContext}from 'react';
import { observer } from 'mobx-react-lite'
import RootStoreContext from '../../stores/RootStore';
import {withRouter,RouteComponentProps} from 'react-router-dom'
const StartScreen : FunctionComponent<RouteComponentProps> = observer((props) => {
    const {  questionsStore } = useContext(RootStoreContext);
    const [numberOfQuestions,setNumberOfQuestions] = useState<string>('')
    const submitHandler = (e:SyntheticEvent) => {
        e.preventDefault()
       questionsStore.fetchQuestions(numberOfQuestions,props) 
    }
  return (
      <div className="start-screen">
      <form onSubmit={submitHandler} className="start-screen-form">
      <input  type="num" min="1" max="50" placeholder="Choose how many questions you want to answer!"       onChange={e => setNumberOfQuestions(e.target.value)}
      value={numberOfQuestions} required/>
      <button className="button">START</button>
      </form>
      </div>
  )
})

export default withRouter(StartScreen);
