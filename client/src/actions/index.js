import streams from "../apis/streams";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAMS,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispach => {
  const response = await streams.post(
    "http://localhost:3001/streams", // debug later
    formValues
  );
  return {
    type: CREATE_STREAMS,
    payload: response.data
  };
};
export const fetchStreams = () => async dispatch => {
  const response = await streams.get("http://localhost:3001/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`http://localhost:3001/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`http://localhost:3001/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
};
