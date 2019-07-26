import React, { useState } from "react";
import { addSmurf } from "../components/actions";
import { connect } from "react-redux";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  console.log("SmurfForm newSmurf", newSmurf);
  const handleChanges = event => {
    event.preventDefault();
    // console.log("handleChanges newSmurf", newSmurf);
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const addSmurf = event => {
    event.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

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
};

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
