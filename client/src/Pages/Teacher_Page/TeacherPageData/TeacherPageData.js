import React, { useEffect, useState } from 'react';
import { get } from '../../../Axios/axiosMethods';
import './TeacherPageData.scss';
import { Button, Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom';
const TeacherPageData = (props) => {

    const [quizes, setQuizes] = useState([]);

    const [message, setMessage] = useState('')
 
    let history = useHistory();

    useEffect(() => {
        get('quizes', setQuizes ,setMessage )
    }, [])

    const AddQuiz = (id) => {
        history.push(`/teacher/${id}/quizes`)
    }

    return (
        <>
            <section className='teacher-data'>
                <h2>Name: {props.name}</h2>
                <h3>Username: {props.username}</h3>
                <h3>Email: {props.email}</h3>
                <h4>Class: {props.class}</h4>
            </section>
            <section className='Quizes'>
                <h2>Quizes</h2>
                <Button color='info' onClick={() => AddQuiz(props.id)}>Add Quiz</Button>
                {message ? <Alert color='danger'>{message}</Alert>:null}
            {quizes.filter(quiz => props.id === quiz.teacher_id).map(quiz => {
                return (
                    <h1 key={quiz.id}> {quiz.name}</h1>
                )
            })}
            </section>
        </>
    )
}

export default TeacherPageData;