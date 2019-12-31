import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

// export const fetchPostsAndUsers = () => (dispatch) => {
//   dispatch(fetchPosts());
//
// };

export const fetchPostsAndUsers = function() {
  return async function(dispatch, getState) {
      await dispatch(fetchPosts());
    //uniq will return an array with just the unique user ids
    //map is similar to how we usually use array.map
    // const userIds =_.uniq(_.map(getState().posts, 'userId'));
    const userIdsDupe = _.map(getState().posts, 'userId');
    const userIds = [...new Set(userIdsDupe)];
    // console.log(userIds); //displays 1,2,3,4,5,6,7,8,9,10
    userIds.forEach(id => dispatch(fetchUser(id)));
  }
}
// export const fetchPostsAndUsers = () => {
//   return async function(dispatch, getState) {
//     await dispatch(fetchPosts());
//     //uniq will return an array with just the unique user ids
//     //map is similar to how we usually use array.map
//     // const userIds =_.uniq(_.map(getState().posts, 'userId'));
//     const userIdsDupe =_.map(getState().posts, 'userId');
//     const userIds = [...new Set(userIdsDupe)];
//     // console.log(userIds); //displays 1,2,3,4,5,6,7,8,9,10
//     userIds.forEach(id => dispatch(fetchUser(id)));
//   }
// };


//defining a function fetchPosts that returns a function
export const fetchPosts =() => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data

    })
  };
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

// //underscore to rep  a private function
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }

// //underscore to rep  a private function
// const _fetchUser = _.memoize(async (id ,dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// });


