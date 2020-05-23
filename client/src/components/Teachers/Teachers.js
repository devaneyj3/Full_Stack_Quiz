import React, { useContext } from "react";
import "./Teachers.scss";
import { teacherContext } from "../../Context/Context";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  const data = useContext(teacherContext);

  return (
    <section className="Teachers">
      <h1>Here is a list of all the teachers</h1>
      {data.data.map((teacher) => {
        return (
          <Teacher
            key={teacher.id}
            name={teacher.name}
            email={teacher.email}
            class={teacher.class}
          />
        );
      })}
    </section>
  );
};

export default Teachers;
