import React, { useContext, useState } from "react";
import "./Teacher.scss";
import { Button, Alert } from "reactstrap";
import { teacherContext } from "../../Context/Context";
import { edit, deleteEntry } from "../../Axios/axiosMethods";
import { useHistory } from "react-router-dom";
import ReusableForm from "../reusableForm";
const Teacher = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    id: props.id,
    name: "",
    username: '',
    email: "",
    password: '',
    class: "",
  });
  const [message, setMessage] = useState("");

  const data = useContext(teacherContext);

  const history = useHistory();

  const editingMode = () => {
    setIsEditing(true);
  };

  const save = () => {
    edit(data.data, data.setData, setMessage, props.id, info);
    setIsEditing(false);
  };

  const goToTeacherPage = (id) => {
    history.push(`/teacher/${id}`)
  }
  return (
    <>
      <section className="Teacher">
        {isEditing ? (
          <>
            <ReusableForm entry={info} set={setInfo} text='Save' message={message} setMessage={setMessage} save={() => save()}/>
          </>
        ) : (
          <div className='teacher-box' onClick={() => goToTeacherPage( props.id)}>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.class}</h1>
          </div>
        )}
        {isEditing ? (
          null
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
