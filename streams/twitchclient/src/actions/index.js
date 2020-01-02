export const signIn = () => {
  console.log('signIn FROM actions/index.js');
  return {
    type: 'SIGNED_IN'
  }
};

export const signOut = () => {
  console.log('signOut FROM actions/index.js');
  return {
    type: 'SIGNED_OUT'
  }
};
