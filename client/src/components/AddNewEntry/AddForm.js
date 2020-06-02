import React, { useState } from "react";

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

  return (
    <div className="form-container">
      <section className="Entry">
        <ReusableForm entry={Entry} set={setEntry} text='Add' message={message} setMessage={setMessage} options />
      </section>
    </div>
  );
};

export default AddNewEntry;
