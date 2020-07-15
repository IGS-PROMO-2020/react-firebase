import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

function Data(props) {
  const [myState, setMyState] = useState({ data: [] });

  console.log("Les data retournees ", myState.data);

  useEffect(() => {
    firebase
      .database()
      .ref("newMembers")
      .on("value", (snapshot) => {
        console.log("Les data retournees ", Object.entries(snapshot.val())[0]);
        const obj = snapshot.val();
        if (
          snapshot != null ||
          snapshot != [] ||
          snapshot != {} ||
          snapshot != ""
        ) {
          let data = [];
          for (let [key, value] of Object.entries(snapshot.val())) {
            console.log("Les data retournees ", value);
            data.push(value);
            setMyState({ data });
          }
        }
      });
  }, []);

  return (
    <div className="App">
      <h1> Nos donnees: </h1>
      {myState.data.map((val) => {
        return (
          <div>
            {" "}
            {val.email} - {val.password}
          </div>
        );
      })}
    </div>
  );
}

export default Data;
