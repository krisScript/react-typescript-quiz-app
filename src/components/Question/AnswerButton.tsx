import React ,{FunctionComponent}from 'react';
interface AnswerButtonProps{
    answer:string,
    answerQuestionHandler:(answer:string) => void,
}
const AnswerButton : FunctionComponent<AnswerButtonProps> = ({answer,answerQuestionHandler}) => {
  return (
      <button className="button" onClick={() => answerQuestionHandler(answer)}>{answer}</button>
  )
}

export default AnswerButton;
