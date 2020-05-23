import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "../components/Nav/Nav";
import { Route } from "react-router-dom";
import Teachers from "../components/Teachers/Teachers";
import { teacherContext } from "../Context/Context";
import { getTeachers } from "../Axios/axiosMethods";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getTeachers(setData, setMessage);
  }, []);

  return (
    <div className="app-container">
      <Nav />
      students quizes
      <teacherContext.Provider value={{ data, message }}>
        <Route exact path="/" />
        <Route exact path="/teachers" component={Teachers} />
      </teacherContext.Provider>
    </div>
  );
}

export default App;
