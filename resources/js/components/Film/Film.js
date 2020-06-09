import React, { Component } from "react";
import axios from "axios";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: [],
            userInfo: [],
            commentsUser: [],
            filmGenres: [],
            genreIsLoaded: false,
            commentUserIsLoading: false,
            isLoading: false,
            film_id: null,
            comment: ""
        };

        this.validateForm = this.validateForm.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.location.query.film;
        const access_token = this.props.location.query.bearer_token;
        // console.log(id);
        this.setState({
            userInfo: this.props.location.query.user_info,
            film_id: this.props.location.query.film
        });
        axios
            .get(`http://127.0.0.1:8000/api/films/${id}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            .then(res => {
                this.setState({
                    film: res.data.data,
                    film_id: id,
                    isLoading: true
                });
            });

        axios
            .get(`http://127.0.0.1:8000/api/films/${id}/users`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            .then(res => {
                this.setState({
                    commentsUser: res.data.data,
                    commentUserIsLoading: true
                });
            });

        axios
            .get(`http://127.0.0.1:8000/api/films/${id}/genres`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            .then(res => {
                // console.log(res);
                this.setState({
                    filmGenres: res.data.data,
                    genreIsLoaded: true
                });
            });
    }

    validateForm() {
        return this.state.comment.length > 0;
    }

    setInputValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm() {
        const body = {
            comment: this.state.comment,
            user_id: this.state.userInfo[0].id,
            film_id: this.state.film_id
        };
        // console.log(this.state.userInfo[0].id);
        axios.post("http://127.0.0.1:8000/api/comments", body).then(res => {
            console.log(res.data.data);
            this.setState({
                commentsUser: [...this.state.commentsUser, res.data.data]
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h2>Film Details</h2>
                <div className="row">
                    <div className="col-md-4 film-details">
                        <img
                            src={this.state.film.photo}
                            width="150px"
                            height="150px"
                        />
                        <h4>Movie Name: {this.state.film.name} </h4>
                        <h6>
                            Genre:{" "}
                            {this.state.filmGenres.map((genre, id) => (
                                <span key={id}> {genre.name}, </span>
                            ))}
                        </h6>
                        <h6>Release Date: {this.state.film.release} </h6>
                        <h6>Rating: {this.state.film.rating} </h6>
                        <h6>Ticket price: {this.state.film.price} </h6>
                        <h6>
                            Ticket Available:{" "}
                            {this.state.film.ticket == "available" ? (
                                <span className="text-success">Available</span>
                            ) : (
                                <span className="text-danger">
                                    Not Available
                                </span>
                            )}{" "}
                        </h6>
                        <h6> Country of origin: {this.state.film.country} </h6>
                        <div>
                            <Link to={`/filmlist`}>
                                <Button>Details</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 comment-list">
                        {this.state.commentsUser.map((comment, id) => (
                            <div
                                key={id}
                                style={{
                                    backgroundColor: "white",
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    marginBottom: 10,
                                    borderBottom: "1px solid"
                                }}
                            >
                                <ul style={{ listStyleType: "none" }}>
                                    <li>
                                        <h5>{comment.user.name}</h5>
                                        <h6>
                                            {comment.comment} --{" "}
                                            <b>
                                                <TimeAgo
                                                    date={comment.created_at}
                                                />
                                            </b>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        ))}

                        <div>
                            <Form onSubmit={e => e.preventDefault()}>
                                <FormGroup>
                                    <Label>New Comment</Label>
                                    <Input
                                        autoFocus
                                        type="text"
                                        name="comment"
                                        value={this.state.comment}
                                        onChange={this.setInputValue}
                                    />
                                </FormGroup>
                                <Button
                                    type="submit"
                                    disabled={!this.validateForm()}
                                    onClick={this.submitForm}
                                >
                                    Add
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Film;
