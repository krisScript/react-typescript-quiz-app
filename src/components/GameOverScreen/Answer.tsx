import React ,{FunctionComponent}from 'react';
import IAnswer from '../../types/Answer'
const Answer : FunctionComponent<{answer:IAnswer}> = ({answer}) => {
    console.log(answer)
  return (
      <div className={`answer ${answer.isCorrect ? 'correct' : 'wrong'}`}>
       <h2 className="answer-question">{answer.question}</h2>
       <p className="answer-answer">Correct Answer{answer.correctAnswer}</p>
       <p className="answer-answer">User Answer{answer.userAnswer}</p>
       <p className={`answer-difficulty ${answer.difficulty}-bg`}>Difficulty: {answer.difficulty}</p>
      </div>
  )
}

export default Answer;
