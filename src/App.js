import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import ThemeContext from "./ThemeContext";

import Search from "./SearchParams";
import Details from "./Details";

function App() {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <Search path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
