export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("getSmurfs response.data", response.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("getSmurfs error", error);
      dispatch({
        type: FETCH_SMURF_ERROR,
        payload: error.response.data.error
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log("addSmurfs response.data", response.data);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addSmurfs error", error);
      dispatch({
        type: ADD_SMURF_ERROR,
        payload: error
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log("deleteSmurfs response.data", response.data);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("deleteSmurfs error", error);
      dispatch({
        type: DELETE_SMURF_ERROR,
        payload: error
      });
    });
};
