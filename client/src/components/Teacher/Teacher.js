import React from "react";
import "./Teacher.scss";
const Teacher = (props) => {
  return (
    <section className="Teacher">
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.class}</h1>
      {/* TODO:use reactstrap buttons */}
      <button>Edit</button>
      <button>Delete</button>
    </section>
  );
};

export default Teacher;
