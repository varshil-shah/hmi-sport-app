import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { LoginRegisterModalProvider } from "context/loginRegisterModalContext";

function App() {
  return (
    <Router>
      <LoginRegisterModalProvider>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </LoginRegisterModalProvider>
    </Router>
  );
}

export default App;
