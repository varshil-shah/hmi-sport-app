import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { LoginRegisterModalProvider } from "context/loginRegisterModalContext";
import { UserProvider } from "context/userContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <LoginRegisterModalProvider>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </LoginRegisterModalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
