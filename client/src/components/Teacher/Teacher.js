import React, { useContext, useState } from "react";
import "./Teacher.scss";
import { Button, Alert } from "reactstrap";
import { teacherContext } from "../../Context/Context";
import { edit, deleteEntry } from "../../Axios/axiosMethods";
const Teacher = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    id: props.id,
    name: "",
    username: props.username,
    email: "",
    password: props.password,
    class: "",
  });
  const [message, setMessage] = useState("");

  const data = useContext(teacherContext);

  const editingMode = () => {
    setIsEditing(true);
  };

  const save = () => {
    edit(data.data, data.setData, setMessage, props.id, info);
    setIsEditing(false);
  };

  const change = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="Teacher">
        {isEditing ? (
          <>
            {message ? <Alert color="danger">{message}</Alert> : null}
            <input
              type="text"
              onChange={change}
              name="name"
              value={info.name}
              placeholder={props.name}
            />
            <input
              type="email"
              onChange={change}
              name="email"
              value={info.email}
              placeholder={props.email}
            />
            <input
              type="text"
              onChange={change}
              name="class"
              value={info.class}
              placeholder={props.class}
            />
          </>
        ) : (
          <>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.class}</h1>
          </>
        )}
        {isEditing ? (
          <Button color="success" onClick={save}>
            Save
          </Button>
        ) : (
          <>
              {data.adminMode ?
                <><Button color="primary" onClick={editingMode}>
                Edit
            </Button>
            <Button color="danger" onClick={() => deleteEntry(props.id, data.data, data.setData)}>
                  Delete
            </Button></>: null}
          </>
        )}
      </section>
    </>
  );
};

export default Teacher;
