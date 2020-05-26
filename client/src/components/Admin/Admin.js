import React, { useState, useContext } from "react";
import { teacherContext } from "../../Context/Context";
import { Alert } from "reactstrap";

const Admin = (props) => {
  const [Admin, setAdmin] = useState({
    username: "",
    password: "",
  });
    const [message, setMessage] = useState('');
    
    const data = useContext(teacherContext);

  const change = (e) => {
    setAdmin({...Admin, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
      console.log(Admin.username, Admin.password);
      if (Admin.username === 'devaneyj3' && Admin.password === 'Lambda') {
          data.setAdminMode(true)
          setMessage('You are Logged in. Redirecting...')
          setTimeout(() => {
              props.history.goBack();
          }, 2000);
      } else {
          setMessage("Please try again");
          setAdmin({ username: "", password: "" });
      }
  };

    return (
        <>{message ? <Alert color='info'>{message}</Alert>: null}
    <section className="Admin">
      <form onSubmit={submitForm}>
        <input
          text="text"
          name="username"
          onChange={change}
          value={Admin.username}
          placeholder='Username'
        />
        <input type='password' name="password" onChange={change} value={Admin.password} placeholder='Password' />
        <input type="submit" />
      </form>
            </section>
            </>
  );
};

export default Admin;
