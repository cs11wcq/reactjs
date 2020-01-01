const INITIAL_STATE = {
  isSignedIn: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNED_IN':
      console.log('Changing state isSignedIn true');
      return {...state, isSignedIn: true};
    case 'SIGNED_OUT':
      console.log('Changing state isSignedIn false');
      return {...state, isSignedIn: false};
    default:
      return state;
  }
};
