import React, { useContext } from "react";
import "./Teachers.scss";
import { teacherContext } from "../../Context/Context";
import Teacher from "../Teacher/Teacher";
import { edit, deleteEntry  } from "../../Axios/axiosMethods";

const Teachers = () => {
  const data = useContext(teacherContext);

  return (
    <>
      <h1>Here is a list of all the teachers</h1>
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
                  deleteEntry={() => deleteEntry(teacher.id, data.data, data.setData)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Teachers;
