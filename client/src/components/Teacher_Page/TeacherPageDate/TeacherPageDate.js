import React, { useEffect, useState } from 'react';
import { getQuizesByTeacherId } from '../../../Axios/axiosMethods';
import './TeacherPageDate.scss';
import { Button } from 'reactstrap';
const TeacherPageData = (props) => {

    const [quizes, setQuizes] = useState([]);
    console.log(quizes)

    useEffect(() => {
        getQuizesByTeacherId(props.id, setQuizes)
    }, [])

    const AddQuiz = () => {
        props.history.push('/quizes')
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
                <Button color='info' onClick={AddQuiz}>Add Quiz</Button>
            {quizes.filter(quiz => props.id == quiz.teacher_id).map(quiz => {
                return (
                    <h1> {quiz.name}</h1>
                )
            })}
            </section>
        </>
    )
}

export default TeacherPageData;