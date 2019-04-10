import {observable,action } from 'mobx';
import Question from '../types/Question'
import {persist,create} from 'mobx-persist';
import {RouteComponentProps} from 'react-router-dom'
import getData from '../util/getData';
 class QuestionsStore{
     @observable questions : Question[] = []
     @observable maxQuestions : number = 0
     @observable currentQuestion : Question = {category:'', type:'',
        difficulty:'',
        question:'',
        correct_answer:'',
        incorrect_answers:[]}
    @action fetchQuestions(numberOfQuestions :string,routeProps:RouteComponentProps) : void{
        const url : string = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`
        getData(url)
        .then(data=> {
            this.questions = data.results
            this.maxQuestions = data.results.length
            routeProps.history.replace('/question/0')
        })
    }
    @action setCurrentQuestion(questionId:number){
        const currentQuestion : Question  = this.questions[questionId]
        if(typeof currentQuestion){
            this.currentQuestion = currentQuestion
        
        }
    }
    @action emptyQuestions() : void{
       this.questions = []
    }
    }


export default QuestionsStore