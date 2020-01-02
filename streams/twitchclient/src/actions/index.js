import {SIGNED_IN, SIGNED_OUT} from '../actions/types';

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
