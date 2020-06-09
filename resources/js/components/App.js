import React from "react";
import ReactDOM from "react-dom";
import FilmList from "./Film/FilmList";
import Film from "./Film/Film";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
import Navbar from "./Navbar/Navbar";
import Registration from "./Registration/Registration";
import AddFilm from "./Film/AddFilm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        // <Switch>
        <Router>
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/filmlist" component={FilmList} />
            <Route exact path="/film/:id" component={Film} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/registration" component={Registration} />
            <Route exact path="/addnewfilm" component={AddFilm} />
        </Router>

        // </Switch>
    );
}

export default App;

if (document.getElementById("frontend")) {
    ReactDOM.render(<App />, document.getElementById("frontend"));
}
