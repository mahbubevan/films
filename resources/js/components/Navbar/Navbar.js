import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("access_token");
        localStorage.removeItem("token_type");
        localStorage.removeItem("email");
        localStorage.removeItem("userIsAuthenticated");
        localStorage.removeItem("bearer_token");
        localStorage.removeItem("user_info");
        this.props.history.push("/");
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/user/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/registration" className="nav-link">
                        Registration
                    </Link>
                </li>
            </ul>
        );

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/filmlist" className="nav-link">
                        Filmlist
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href=""
                        onClick={this.logOut.bind(this)}
                        className="nav-link"
                    >
                        Logout
                    </a>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    className="navbar-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar1"
                    aria-expand="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>

                    {localStorage.access_token ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
