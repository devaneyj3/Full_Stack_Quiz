import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "../components/Nav/Nav";
import { Route, Redirect } from "react-router-dom";
import Teachers from "../components/Teachers/Teachers";
import { teacherContext } from "../Context/Context";
import { getTeachers } from "../Axios/axiosMethods";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNewEntry from "../components/AddNewEntry/AddForm";
import Admin from '../components/Admin/Admin';
import TeacherPage from '../components/Teacher_Page/Teacher_Page';
import Quiz from "../components/Quiz/quiz";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    getTeachers(setData, setMessage);
  }, []);

  return (
    <div className="app-container">
      <teacherContext.Provider value={{
        data, message, setData, setMessage, adminMode, setAdminMode
      }}>
        <Nav />
      students quizes
        <Route exact path="/" />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/newTeacher" component={AddNewEntry} />
        <Route path='/admin-login' component={Admin} />
        <Route exact path='/teacher/:id' component={TeacherPage} />
        <Route exact path='/teacher/:id/quizes' component={Quiz} />
        <Redirect from='/' to='/teachers' />

      </teacherContext.Provider>
    </div>
  );
}

export default App;
