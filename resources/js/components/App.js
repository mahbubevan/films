import React from "react";
import ReactDOM from "react-dom";
import FilmList from "./Film/FilmList";
import Film from "./Film/Film";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
import NavbarB from "./Navbar/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        // <Switch>
        <Router>
            <NavbarB />
            <Route exact path="/" component={Welcome} />
            <Route path="/filmlist" component={FilmList} />
            <Route path="/film/:id" component={Film} />
            <Route path="/user/login" component={Login} />
        </Router>

        // </Switch>
    );
}

export default App;

if (document.getElementById("frontend")) {
    ReactDOM.render(<App />, document.getElementById("frontend"));
}
