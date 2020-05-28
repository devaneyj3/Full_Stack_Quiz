import React, { useState, useEffect} from 'react';
const TeacherPage = (props) => {

    const { id } = props.match.params
   return(
       <section className='TeacherPage'>
           <p>Info for teacher: {id} </p>
    </section>
  )
}

export default TeacherPage;