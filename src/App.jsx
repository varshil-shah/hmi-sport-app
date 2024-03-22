import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
