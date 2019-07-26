import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../components/actions/index";
import Smurf from "./Smurf";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  console.log("SmurfList props.", props);
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf smurf={smurf} key={smurf.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("SmurfList mapStateToProps state", state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
