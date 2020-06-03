import React, { useState } from 'react';
import './quiz.scss'
import QuizForm from './QuizForm';
const Quiz = (props) => {

    const [newQuiz, setNewQuiz] = useState({
        id: Date.now(),
        name: '',
        teacher_id: parseInt(props.match.params.id)
    });

    const [message, setMessage] = useState()
    return (
        <section className='quiz'>
            <QuizForm entry={newQuiz} set={setNewQuiz} text="Add Quiz" message={message} setMessage={setMessage} options />
        </section>
    )
}

export default Quiz;