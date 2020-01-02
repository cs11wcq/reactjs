import {SIGNED_IN, SIGNED_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNED_IN:
      console.log('Changing state isSignedIn true');
      return {...state, isSignedIn: true, userId: action.payload};
    case SIGNED_OUT:
      console.log('Changing state isSignedIn false');
      return {...state, isSignedIn: false, userId: null};
    default:
      // console.log(action.type, 'INITIALLY NULL');
      return state;
  }
};
