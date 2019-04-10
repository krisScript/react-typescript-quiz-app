import React ,{FunctionComponent}from 'react';
interface AnswerButtonProps{
    answer:string,
}
const AnswerButton : FunctionComponent<AnswerButtonProps> = ({answer}) => {
  return (
      <button>{answer}</button>
  )
}

export default AnswerButton;
