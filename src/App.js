import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// import PersonList from "./components/PersonList.js";

function App() {
  const [post, setPost] = useState(0);

  useEffect(() => {
    axios.get("/api/time").then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
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
        <p>The current time is {post.time}.</p>
        {/* <PersonList /> */}
      </header>
    </div>
  );
}

export default App;
