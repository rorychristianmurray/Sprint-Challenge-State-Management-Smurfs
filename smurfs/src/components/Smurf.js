import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../components/actions/index";

const Smurf = props => {
  const deleteSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(props.smurf.id);
  };

  return (
    <div>
      <ul>
        <li>Name: {props.smurf.name}</li>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height}</li>
      </ul>
      <button onClick={deleteSmurf} className="delete-btn">
        X
      </button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
