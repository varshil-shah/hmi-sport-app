import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { LoginRegisterModalProvider } from "context/loginRegisterModalContext";
import { UserProvider } from "context/userContext";
import { IKContext } from "imagekitio-react";
import { SportProvider } from "context/sportContext";

function App() {
  return (
    <Router>
      <SportProvider>
        <UserProvider>
          <LoginRegisterModalProvider>
            <ScrollToTop>
              <Routes />
            </ScrollToTop>
          </LoginRegisterModalProvider>
        </UserProvider>
      </SportProvider>
    </Router>
  );
}

export default App;
