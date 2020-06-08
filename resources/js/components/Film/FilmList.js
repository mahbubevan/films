import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
    Card,
    CardImg,
    CardSubtitle,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";

class FilmList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmList: [],
            isLoading: false
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/films/").then(res => {
            this.setState({
                filmList: res.data.data,
                isLoading: true
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Film Lists</h1>
                    <div className="row">
                        {this.state.filmList.map((film, id) => (
                            <div className="col-md-3 mt-2 mb-2" key={id}>
                                <Card>
                                    <CardImg
                                        top
                                        width="100%"
                                        src={film.photo}
                                        alt="Film Thumbnail"
                                    />
                                    <CardBody>
                                        <CardTitle>
                                            Movie: {film.name}
                                        </CardTitle>
                                        <CardSubtitle>
                                            Country: {film.country}
                                        </CardSubtitle>
                                        <Link
                                            to={`film/${film.id}`}
                                            key={film.id}
                                        >
                                            <Button>Details</Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmList;
