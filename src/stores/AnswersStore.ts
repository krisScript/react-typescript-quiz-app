import {observable,action } from 'mobx';
import Answer from '../types/Answer'
import {persist,create} from 'mobx-persist';
import {RouteComponentProps} from 'react-router-dom'
import getData from '../util/getData';
 class AnswersStore{
     @observable answers : Answer[] = []
     
     @action answerQuestion(answer:Answer){
         this.answers = [...this.answers,answer]
         console.log(this.answers)
     }
    }


export default AnswersStore