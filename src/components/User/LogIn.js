import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col, FormFeedback } from 'reactstrap';
import '../../styles/user.css';

export class LogIn extends React.Component {

    render() {
        return (
            <Container className="LogInApp">
                <h2> Sign In</h2>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" id="username" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" />
                        </FormGroup>
                    </Col>
                    <Col className="text-right" >
                        <Button>Submit</Button>
                    </Col>
                    <Col><FormFeedback invalid="true">User Logged In </FormFeedback>
                    </Col>
                </Form>
            </Container>
        );
    }
}
