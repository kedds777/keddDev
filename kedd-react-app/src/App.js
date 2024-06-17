// src/App.js

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React from "react";
import "./App.css";
import Login from "./Login";
import "./Login.css";
import Header from "./Header";
import "./Header";
import Footer from "./Footer";
import "./Footer";
import Room from "./Room";
import "./Room";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/room" element={<Room />} />
            <Route path="/redirectRoom" element={<Navigate to="/room" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
