import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
   return(
       <section className='Nav'>
           <nav className="Nav-Elements">
               <NavLink to='/teachers'>Teachers</NavLink> 
               <NavLink to='/students'>Students</NavLink>
               <NavLink to='/quizes'>Quizes</NavLink>
           </nav>
    </section>
  )
}

export default Nav;