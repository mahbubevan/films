import React from "react";
import ReactDOM from "react-dom";
import FilmList from "./Film/FilmList";
function App() {
    return (
        <div>
            <FilmList />
        </div>
    );
}

export default App;

if (document.getElementById("frontend")) {
    ReactDOM.render(<App />, document.getElementById("frontend"));
}
