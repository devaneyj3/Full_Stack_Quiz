import React, { useState, useEffect } from 'react';
import { getByID } from '../../Axios/axiosMethods';
import TeacherPageData from './TeacherPageDate/TeacherPageDate';
import './Teacher_Page.scss';
const TeacherPage = (props) => {
    const [data, setData] = useState([]);
    const { id } = props.match.params;

    useEffect(() => {
        getByID(setData, id)
    }, [])
    return (
            <section className='TeacherData'>
                {data.map(info => {
                    return (
                        <TeacherPageData
                            key={info.id}
                            id={info.id}
                            name={info.name}
                            username={info.username}
                            email={info.email}
                            class={info.class} />
                    )
                })}
            </section>
    )
}

export default TeacherPage;