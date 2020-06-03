import React, { useContext } from "react";
import { addData } from "../../Axios/axiosMethods"
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

const QuizForm = ({ entry, set, text, message, setMessage, options, save }) => {

    const data = useContext(teacherContext);

    const history = useHistory();
    const change = (e) => {
        set({ ...entry, [e.target.name]: e.target.value });
    };


    const submitForm = (e) => {
        e.preventDefault();
        if (options) {
            addData('quizes', data.data, entry, data.setData, setMessage);
            setTimeout(() => {
                history.goBack();
            }, 2000);
        }
        else if (save) {
            save()

        }

    };

    return (
        <>
            {message ? <Alert color="info">{message}</Alert> : null}
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
                                value={entry.name}
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button
                    type="submit"
                    color="success"
                    disabled={
                        (entry.name === ""
                            ? true : false)
                    }
                >
                    {text}
                </Button>
            </Form>
        </>
    )
}

export default QuizForm;