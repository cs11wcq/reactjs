import streams from '../apis/streams';
import history from '../history';
import {
  SIGNED_IN,
  SIGNED_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export const signIn = (userId) => {
  // console.log('signIn FROM actions/index.js');
  return {
    type: SIGNED_IN,
    payload: userId
  }
};

export const signOut = () => {
  // console.log('signOut FROM actions/index.js');
  return {
    type: SIGNED_OUT
  }
};

//NOTE: REFER #244 8:00

//streams.post will create the stream
export const createStream = (formValues) => {
  //destructuring getState().auth.userId
  //#252 3:00 userId addition
  return async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});

    dispatch({type: CREATE_STREAM, payload: response.data})
    //Do some programmatic navigation to get the user
    //back to the root route (http://localhost:3000/). #255
    history.push('/');
  }
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  console.log(response);
  dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
  }
};

export const editStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data});
  };
};

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id})
};
