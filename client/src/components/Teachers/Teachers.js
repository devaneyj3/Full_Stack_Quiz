import React, { useContext } from "react";
import "./Teachers.scss";
import { teacherContext } from "../../Context/Context";
import Teacher from "../Teacher/Teacher";
import { edit, deleteEntry } from "../../Axios/axiosMethods";
import { Alert, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Teachers = () => {
  const data = useContext(teacherContext);

  const history = useHistory();

  const goToAddInfo = () => {
    history.push("/newTeacher");
  };

  return (
    <div className="info-container">
      {data.data.length === 0 ? (
        <Alert color="danger">{data.message}</Alert>
      ) : null}
      <h1>Here is a list of all the teachers</h1>
      {data.adminMode ? <Button onClick={goToAddInfo} color="success">
        Add Teacher
      </Button> : null}
      <section className="Teachers">
        {data.data.map((teacher) => {
          return (
            <Teacher
              key={teacher.id}
              id={teacher.id}
              name={teacher.name}
              username={teacher.username}
              email={teacher.email}
              password={teacher.password}
              class={teacher.class}
              edit={edit}
              deleteEntry={deleteEntry}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Teachers;
