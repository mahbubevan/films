import React, { Component } from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userIsAuthenticated: false,
            email: "",
            password: ""
        };

        this.validateForm = this.validateForm.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    setInputValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm() {}

    render() {
        return (
            <div className="container m-30">
                <h2>Login Page</h2>
                <div className="box">
                    <Form>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                autoFocus
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.setInputValue}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.setInputValue}
                            />
                        </FormGroup>
                        <Button
                            disabled={!this.validateForm()}
                            onClick={this.submitForm}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
