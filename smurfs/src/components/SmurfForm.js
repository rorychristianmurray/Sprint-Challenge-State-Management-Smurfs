import React, { useState } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  return (
    <form onSubmit={addSmurf} className="smurf-form">
      <input
        type="text"
        placeholder="smurf name"
        name="name"
        value={newSmurf.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="smurf age"
        name="age"
        value={newSmurf.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="smurf height"
        name="height"
        value={newSmurf.height}
        onChange={handleChanges}
      />
      <button className="btn">Add Smurf</button>
    </form>
  );

  const handleChanges = event => {
    event.preventDefault();
    props.setNewSmurf(event.target.value);
  };

  const addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: state.name,
      age: state.age,
      height: state.height
    };
    props.addSmurf(newSmurf);
  };
};

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
