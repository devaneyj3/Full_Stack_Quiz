import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { teacherContext } from '../../Context/Context';
import { Button } from 'reactstrap';

const Nav = () => {

  const data = useContext(teacherContext);

  const LogOut = () => {
    data.setAdminMode(false);
  }
   return(
       <section className='Nav'>
       <nav className="Nav-Elements">
         {data.adminMode ? <Button onClick={LogOut}>Admin Logout</Button>: <NavLink to='/admin-login'>Admin Login</NavLink>}
          <NavLink to='/teachers'>Teachers</NavLink> 
          <NavLink to='/students'>Students</NavLink>
      </nav>
    </section>
  )
}

export default Nav;