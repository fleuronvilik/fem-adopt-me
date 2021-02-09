import React from "react";
import ReactDOM from "react-dom";

import Search from "./SearchParams";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Search />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
