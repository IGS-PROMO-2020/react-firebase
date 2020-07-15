import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import Data from "./data";

function App() {
  const state = {
    error: null,
    email: "",
    password: "",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [myState, setMyState] = useState(state);

  const handleChange = (event) => {
    console.log(event.target.value);
    setMyState({
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeEmail = (event) => setEmail(event.target.value);

  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMyState({ error: "" });
    const response = await firebase.database().ref("otherMemver").push({
      email,
      password,
    });
    const data = await response;

    if (data) {
      console.log("enregistrement ok");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <h1></h1>
          <p>Fill in the form below to create an account.</p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="text"
              onChange={handleChangeEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={handleChangePassword}
              value={password}
              type="text"
            ></input>
          </div>
          <div>
            <button type="submit">Sign up</button>
          </div>
          <hr></hr>
          <Data name="marcel" />
        </form>
      </div>
    </div>
  );
}

export default App;
