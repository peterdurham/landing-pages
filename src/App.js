import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import Fold from "./pages/fold";

import Menu from "./components/menu";

const AppStyles = styled.div`
  position: relative;
`;

function App() {
  return (
    <Router>
      <AppStyles>
        <Menu />

        <Routes>
          <Route path="/" element={<CreateReactApp />} />
          <Route path="/create-react-app" element={<CreateReactApp />} />
          <Route path="/fold" element={<Fold />} />
        </Routes>
      </AppStyles>
    </Router>
  );
}

function CreateReactApp() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default App;
