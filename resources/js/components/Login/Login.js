import React, { Component } from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userIsAuthenticated: false,
            email: "",
            password: "",
            token_type: "",
            access_token: ""
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

    submitForm() {
        const body = {
            grant_type: "password",
            client_id: 2,
            client_secret: "zNU41MzobVGo09ndiZr2Z0OKwKXlXKTXVAKzG25w",
            username: this.state.email,
            password: this.state.password
        };

        axios.post("http://127.0.0.1:8000/oauth/token", body).then(res => {
            console.log(res.data);
            this.setState({
                token_type: res.data.token_type,
                access_token: res.data.access_token,
                userIsAuthenticated: true
            });

            // console.log(this.state.userIsAuthenticated);
            if (this.state.userIsAuthenticated) {
                // console.log(this.state.email);
                // console.log("it is true");
                this.props.history.push({
                    pathname: "/filmlist",
                    state: {
                        userIsAuthenticated: this.state.userIsAuthenticated,
                        email: this.state.email,
                        user_access_token: this.state.access_token
                    }
                });
                // return <Redirect to={"/filmlist/"} />;
            }
        });
    }

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
