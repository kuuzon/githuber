// REACT & PACKAGES
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// COMPONENTS:
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";
import Alert from "./components/common/Alert";

// PAGES:
import Home from "./pages/Home";
import About from "./pages/About";
import GitUser from "./pages/GitUser";

function App() {
  // [1] GLOBAL STATES
  // (a) User States
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  // (b) Alert Component States
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  // (c) Lifecycle States
  const [loading, setLoading] = useState(false);
  
  // [2] GLOBAL LOGIC
  // (a) SEARCH FUNCTION [API]: Find All Users against Search Query
  const searchUsers = async (text) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(response.data.items);
    setLoading(false);
  }

  // (b) SEARCH FUNCTION: Clear Button 
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // (c) GITUSER FUNCTION: Find Single User with Username
  const getUser = async (username) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      console.log(response);
      setUserDetails(response.data);
    } catch(err) {
      console.log(err);
      setAlert(
        "Internal Server Error - please try again later",
        "danger"
      )
    }
    setLoading(false);
  }

  // (d) GENERAL FUNCTION: Alert Message (passed alert message & alert type as arguments)
  const setAlert = (alertMessage, alertColor) => {
    setMessage(alertMessage);
    setColor(alertColor);
    setTimeout(() => 
      {
        setMessage("")
        setColor("")
      }, 3000
    );
  }

  return (
    <div className='app'>
      <Router>
        <Navbar title='GitHuber' />
        <Layout>
          <Alert alertMessage={message} alertColor={color} />
          <Routes>
            {/* HOME PAGE */}
            <Route path='/' element={<Home 
              searchUsers={searchUsers} 
              clearUsers={clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={setAlert}
              loading={loading}
              users={users}
            />} />
            {/* ABOUT PAGE */}
            <Route path='/about' element={<About />} />
            {/* GITHUB USER PAGE */}
            <Route path='/users/:login' element={<GitUser 
              getUser={getUser}
              userDetails={userDetails}
              clearUsers={clearUsers}
              loading={loading}
            />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
