import React from 'react';
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

const ReusableForm = ({entry, set, submit, text, message}) => {

    const change = (e) => {
        set({ ...entry, [e.target.name]: e.target.value });
    };

    return (
        <>
            {message ? <Alert color="info">{message}</Alert> : null}
            <Form onSubmit={submit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                onChange={change}
                                value={entry.name}
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
                                value={entry.username}
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
                                value={entry.email}
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
                                value={entry.password}
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
                                value={entry.class}
                                placeholder="Class"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button
                    type="submit"
                    color="success"
                    disabled={
                        (entry.name === "",
                            entry.username === "",
                            entry.email === "",
                            entry.password === "",
                            entry.class === "" ? true : false)
                    }
                >
                 {text}   
                </Button>
            </Form>
        </>
    )
}

export default ReusableForm;