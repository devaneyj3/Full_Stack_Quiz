import React, { useState, useContext } from "react";
import { addEntry } from "../../Axios/axiosMethods";
import { teacherContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";

import "./AddForm.scss";
import ReusableForm from "../reusableForm";

const AddNewEntry = () => {
  const [Entry, setEntry] = useState({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    password: "",
    class: "",
  });

  const [message, setMessage] = useState("");

  const data = useContext(teacherContext);

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    addEntry(data.data, Entry, data.setData, setMessage);
    setEntry({ name: "", username: "", email: "", password: "", class: "" });
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };

  return (
    <div className="form-container">
      <section className="Entry">
        <ReusableForm entry={Entry} set={setEntry} submit={submitForm} text='Add' message={message}/>
      </section>
    </div>
  ); 
};

export default AddNewEntry;
