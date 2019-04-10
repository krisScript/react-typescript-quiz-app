import { createContext } from "react";
import QuestionsStore  from "./QuestionsStore";
import AnswersStore  from "./AnswersStore";


export class RootStore {
  questionsStore = new QuestionsStore();
  answersStore = new AnswersStore()
  constructor() {
 
  }
}

 const RootStoreContext = createContext(new RootStore());
 export default RootStoreContext