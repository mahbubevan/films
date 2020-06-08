import React from "react";
import ReactDOM from "react-dom";
import FilmList from "./Film/FilmList";
import Film from "./Film/Film";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Route path="/filmlist" component={FilmList} />
            <Route path="/film/:id" component={Film} />
        </Router>
    );
}

export default App;

if (document.getElementById("frontend")) {
    ReactDOM.render(<App />, document.getElementById("frontend"));
}
