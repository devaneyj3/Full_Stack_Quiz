import React, { useState, useEffect} from 'react';
import './quiz.scss'
import ReusableForm from '../reusableForm';
const Quiz = () => {

    const [newQuiz, setNewQuiz] = useState();
    const [ message, setMessage ] = useState()
   return(
       <section className='quiz'>
           <ReusableForm entry={newQuiz} set={setNewQuiz} text="Add Quiz" />
    </section>
  )
}

export default Quiz;