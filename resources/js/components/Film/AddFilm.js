import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class AddFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            release: "",
            rating: "1",
            price: 0,
            ticket: "not_available",
            country: "",
            photo: null
        };

        this.validateForm = this.validateForm.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.fileOnChange = this.fileOnChange.bind(this);
    }

    fileOnChange(event) {
        this.setState({
            photo: event.target.files[0]
        });
    }

    submitForm() {
        // const body = {
        //     name: this.state.name,
        //     description: this.state.description,
        //     release: this.state.release,
        //     rating: this.state.rating,
        //     price: this.state.price,
        //     ticket: this.state.ticket,
        //     country: this.state.country
        // };

        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };

        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("release", this.state.release);
        formData.append("rating", this.state.rating);
        formData.append("price", this.state.price);
        formData.append("ticket", this.state.ticket);
        formData.append("country", this.state.country);
        formData.append("photo", this.state.photo);
        axios
            .post("http://127.0.0.1:8000/api/films", formData, config)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.description.length > 0 &&
            this.state.rating.length > 0 &&
            this.state.country.length > 0
        );
    }

    setInputValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const form = (
            <div>
                <h2 className="mb-3 font-weight-normal text-info">
                    Add New Film
                </h2>
                <Form>
                    <FormGroup>
                        <Label for="name">Movie Name: </Label>
                        <Input
                            autoFocus
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.setInputValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            autoFocus
                            type="textarea"
                            name="description"
                            value={this.state.description}
                            onChange={this.setInputValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="release">Movie Release Date: </Label>
                        <Input
                            autoFocus
                            type="date"
                            name="release"
                            value={this.state.release}
                            onChange={this.setInputValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">Movie Rating: </Label>
                        <Input
                            autoFocus
                            type="select"
                            name="rating"
                            value={this.state.rating}
                            onChange={this.setInputValue}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Movie Price: </Label>
                        <Input
                            autoFocus
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.setInputValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ticket">Ticket: </Label>
                        <Input
                            autoFocus
                            type="select"
                            name="ticket"
                            value={this.state.ticket}
                            onChange={this.setInputValue}
                        >
                            <option value="available">Available</option>
                            <option value="not_available">Not available</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country: </Label>
                        <Input
                            autoFocus
                            type="text"
                            name="country"
                            value={this.state.country}
                            onChange={this.setInputValue}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Movie Photo/ Thumbnail: </Label>
                        <Input
                            autoFocus
                            type="file"
                            name="photo"
                            onChange={this.fileOnChange}
                        />
                    </FormGroup>
                    <Button
                        disabled={!this.validateForm()}
                        onClick={this.submitForm}
                    >
                        Add New
                    </Button>
                </Form>
            </div>
        );
        return (
            <div className="container m-30">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        {localStorage.access_token ? (
                            form
                        ) : (
                            <span>Not Allowed</span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFilm;
