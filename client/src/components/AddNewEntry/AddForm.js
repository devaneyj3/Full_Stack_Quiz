import React, { useState, useContext } from "react";
import { addEntry } from "../../Axios/axiosMethods";
import { teacherContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";
import {
  Label,
  Alert,
  Button,
  Col,
  Form,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
import "./AddForm.scss";

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
    <div className="form-container">
      {message ? <Alert color="info">{message}</Alert> : null}
      <section className="Entry">
        <Form onSubmit={submitForm}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={change}
                  value={Entry.name}
                  placeholder="Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  onChange={change}
                  value={Entry.Username}
                  placeholder="Username"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={change}
                  value={Entry.email}
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={change}
                  value={Entry.password}
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="class">Class</Label>
                <Input
                  type="text"
                  name="class"
                  id="class"
                  onChange={change}
                  value={Entry.class}
                  placeholder="Class"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="submit"
            color="success"
            disabled={
              (Entry.name === "",
              Entry.username === "",
              Entry.email === "",
              Entry.password === "",
              Entry.class === "" ? true : false)
            }>
            Add
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default AddNewEntry;
