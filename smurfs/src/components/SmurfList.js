import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../components/actions/index";
import SmurfCard from "./SmurfCard";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  console.log("SmurfList props.", props);
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <SmurfCard smurf={smurf} key={smurf.id} />;
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
