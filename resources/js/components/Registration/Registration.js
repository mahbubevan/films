import React, { Component } from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            status: { status: false },
            error: {}
        };
        this.validateForm = this.validateForm.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.name.length > 0 &&
            this.state.confirm_password.length > 0
        );
    }

    submitForm() {
        const body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        };

        axios
            .post("http://127.0.0.1:8000/api/users", body)
            .then(res => {
                console.log(res.data.error);
                if (res.data.error) {
                    this.setState({
                        error: res.data.error
                    });
                } else {
                    this.setState({
                        status: {
                            message: "Successfully Registered.",
                            status: true
                        }
                    });
                }
            })
            .catch(err => console.log(err));
    }

    setInputValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="container m-30">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2 className="h3 mb-3 font-weight-normal">
                            Registration
                        </h2>
                        {this.state.status.status ? (
                            <span className="text-success">
                                {this.state.status.message}
                            </span>
                        ) : (
                            <span></span>
                        )}
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input
                                    autoFocus
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.setInputValue}
                                />
                                {this.state.error.name ? (
                                    <span className="text-danger">
                                        {this.state.error.name[0]}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    autoFocus
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.setInputValue}
                                />
                                {this.state.error.email ? (
                                    <span className="text-danger">
                                        {this.state.error.email[0]}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.setInputValue}
                                />
                                {this.state.error.password ? (
                                    <span className="text-danger">
                                        {this.state.error.password[0]}
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <Input
                                    type="password"
                                    name="confirm_password"
                                    value={this.state.confirm_password}
                                    onChange={this.setInputValue}
                                />
                            </FormGroup>

                            <Button
                                disabled={!this.validateForm()}
                                onClick={this.submitForm}
                            >
                                Register Here
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
