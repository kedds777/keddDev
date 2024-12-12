// src/App.js

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

// import { BrowserRouter as Link } from 'react-router-dom';

import React, {useState} from "react";
import "../styleSheets/App.css";
import Login from "./Login.js";
import "../styleSheets/Login.css";
import Header from "./Header.js";
import "../styleSheets/Header.css";
import Footer from "./Footer.js";
import "../styleSheets/Footer.css";
import Room from "./Room";
import Register from "./Register.js";
import AuthService from "./AuthService.js";
import Profile from "./Profile.js";
import Logout from "./Logout.js"

function App() {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  console.log(`User: ${JSON.stringify(user)}`);

  const handleLogout = () => {
    console.log("Logging Out.");
    AuthService.logout();
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
      <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="/">MyApp</a>
        </div>
          {user ? (
            <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><button className="link-button" onClick={handleLogout}>Logout</button></li>
          </ul>
          ) : (
            <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Log In</a></li>
          </ul>
          )}
        
      </nav>
    </header>
        <main>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/room" element={<Room />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

// src/App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Profile from "./Profile";
// import AuthService from "./AuthService";

// const App = () => {
//   const [user, setUser] = useState(AuthService.getCurrentUser());

//   const handleLogout = () => {
//     AuthService.logout();
//     setUser(null);
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/">Home</Link>
//           {user ? (
//             <>
//               <Link to="/profile">Profile</Link>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </nav>
//         <Routes>
//           <Route exact path="/" component={() => <h2>Home</h2>} />
//           <Route path="/login" component={() => <Login setUser={setUser} />} />
//           <Route path="/register" component={Register} />
//           <Route path="/profile" component={Profile} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
