import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

class NavbarB extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <Link to="/">FILM REVIEW SITE</Link>
                    </NavbarBrand>

                    <Collapse navbar>
                        <Nav
                            className="mr-auto"
                            navbar
                            style={{ fontSize: "20px" }}
                        >
                            <NavItem>
                                <Link
                                    style={{
                                        marginRight: "15px"
                                    }}
                                    to="/filmlist"
                                >
                                    Filmlist
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/user/login">Login</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarB;
