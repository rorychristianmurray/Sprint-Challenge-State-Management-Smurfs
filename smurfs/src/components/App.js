import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          The Smurfs are back in the neighborhood... but will the peace harmony
          with family and friends last?!?! Join us for this special event to
          find out!
        </h2>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
