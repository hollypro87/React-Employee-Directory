import React from "react";
import Directory from "./components/directory.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Directory} />
      </div>
    </Router>
  )
}

export default App;
