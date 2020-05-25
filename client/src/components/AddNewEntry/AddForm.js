import React, { useState, useContext } from "react";
import { addEntry } from "../../Axios/axiosMethods";
import { teacherContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";

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

  const change = (e) => {
    setEntry({ ...Entry, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addEntry(data.data, Entry, data.setData, setMessage);
    setEntry({ name: "", username: "", email: "", password: "", class: "" });
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };

  return (
    <>
      {message ? <Alert color="info">{message}</Alert> : null}
      <section className="Entry">
        <form onSubmit={submitForm}>
          <input
            text="text"
            name="name"
            onChange={change}
            value={Entry.name}
            placeholder="Name"
          />
          <input
            text="text"
            name="username"
            onChange={change}
            value={Entry.username}
            placeholder="Username"
          />
          <input
            text="email"
            name="email"
            onChange={change}
            value={Entry.email}
            placeholder="Email"
          />
          <input
            text="password"
            name="password"
            onChange={change}
            value={Entry.password}
            placeholder="Password"
          />
          <input
            text="text"
            name="class"
            onChange={change}
            value={Entry.class}
            placeholder="Class"
          />

          <input
            type="submit"
            disabled={
              (Entry.name === "",
              Entry.username === "",
              Entry.email === "",
              Entry.password === "",
              Entry.class === "" ? true : false)
            }
          />
        </form>
      </section>
    </>
  );
};

export default AddNewEntry;
