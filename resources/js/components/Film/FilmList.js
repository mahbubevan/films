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
            current_page: 0,
            first_page_url: "",
            from: 0,
            last_page: 0,
            last_page_url: "",
            next_page_url: "",
            per_page: 0,
            prev_page_url: "",
            to: 0,
            total: 0,
            isLoading: false
        };

        this.nextPageHandler = this.nextPageHandler.bind(this);
        this.prevPageHandler = this.prevPageHandler.bind(this);
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/films/").then(res => {
            // console.log(res.data.data);
            this.setState({
                filmList: res.data.data.data,
                current_page: res.data.data.current_page,
                first_page_url: res.data.data.first_page_url,
                from: res.data.data.from,
                last_page: res.data.data.last_page,
                last_page_url: res.data.data.last_page_url,
                next_page_url: res.data.data.next_page_url,
                per_page: res.data.data.per_page,
                prev_page_url: res.data.data.prev_page_url,
                to: res.data.data.to,
                total: res.data.data.total,
                isLoading: true
            });
        });
    }

    nextPageHandler() {
        const url = this.state.next_page_url;
        axios.get(url).then(res => {
            // console.log(res.data.data);
            this.setState({
                filmList: res.data.data.data,
                current_page: res.data.data.current_page,
                first_page_url: res.data.data.first_page_url,
                from: res.data.data.from,
                last_page: res.data.data.last_page,
                last_page_url: res.data.data.last_page_url,
                next_page_url: res.data.data.next_page_url,
                per_page: res.data.data.per_page,
                prev_page_url: res.data.data.prev_page_url,
                to: res.data.data.to,
                total: res.data.data.total
            });
        });
    }

    prevPageHandler() {
        const url = this.state.prev_page_url;
        axios.get(url).then(res => {
            this.setState({
                filmList: res.data.data.data,
                current_page: res.data.data.current_page,
                first_page_url: res.data.data.first_page_url,
                from: res.data.data.from,
                last_page: res.data.data.last_page,
                last_page_url: res.data.data.last_page_url,
                next_page_url: res.data.data.next_page_url,
                per_page: res.data.data.per_page,
                prev_page_url: res.data.data.prev_page_url,
                to: res.data.data.to,
                total: res.data.data.total
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Film Lists</h1>
                    <div className="ml-right">
                        <span className="btn btn-sm btn-disabled btn-success text-white mr-1">
                            {" "}
                            Total Records: {this.state.total}{" "}
                        </span>

                        <span className="btn btn-sm btn-disabled btn-success text-white mr-1">
                            {" "}
                            Result Showing: {this.state.from} to {this.state.to}{" "}
                        </span>

                        <span className="btn btn-sm btn-disabled btn-success text-white mr-1">
                            {" "}
                            Current Page: {this.state.current_page} of{" "}
                            {this.state.last_page}{" "}
                        </span>
                    </div>
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
                                            to={`/film/${film.id}`}
                                            key={film.id}
                                        >
                                            <Button>Details</Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <span className="ml-2 pr-1">
                                {this.state.prev_page_url === null ? (
                                    <button
                                        disabled
                                        className="btn btn-md btn-primary"
                                    >
                                        Prev Page
                                    </button>
                                ) : (
                                    <button
                                        onClick={this.prevPageHandler}
                                        className="btn btn-md btn-primary"
                                    >
                                        Prev Page
                                    </button>
                                )}
                            </span>
                            <span className="pl-1">
                                {this.state.next_page_url === null ? (
                                    <button
                                        disabled
                                        className="btn btn-md btn-primary"
                                    >
                                        Next Page
                                    </button>
                                ) : (
                                    <button
                                        onClick={this.nextPageHandler}
                                        className="btn btn-md btn-primary"
                                    >
                                        Next Page
                                    </button>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmList;
