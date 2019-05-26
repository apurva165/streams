import streams from "../apis/streams";
import history from "../history";
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
  // console.log({ actionUserId: userId });
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const createStream = formValues => async (dispatch, getState) => {
  //  console.log({ getState });
  //  console.log({ getState: getState().auth });
  const { userId } = getState().auth;
  const response = await streams.post("http://localhost:3001/streams", {
    // debug later
    ...formValues,
    userId
  });
  //console.log({ response });
  dispatch({ type: CREATE_STREAMS, payload: response.data });
  return history.push("/");
};
export const fetchStreams = () => async dispatch => {
  const response = await streams.get("http://localhost:3001/streams");
  //console.log({ fetchStreamsResponse: response.data });
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`http://localhost:3001/streams/${id}`);
  //console.log({ fetchStreamResponse: response.data });
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({ type: EDIT_STREAM, payload: response.data });
  return history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  return history.push("/");
};
