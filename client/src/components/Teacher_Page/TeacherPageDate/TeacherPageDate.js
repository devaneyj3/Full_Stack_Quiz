import React from 'react';
import './TeacherPageDate';
const TeacherPageData = (props) => {
    return (
        <section className='TeacherData'>
            <section className='teacher-data'>
                <h2>Name: {props.name}</h2>
                <h3>Username: {props.username}</h3>
                <h3>Email: {props.email}</h3>
                <h4>Class: {props.class}</h4>

            </section>
        </section>
    )
}

export default TeacherPageData;