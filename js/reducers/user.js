/* @flow */

const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
};

function user(state = initialState, action) {
  if (action.type === 'LOGGED_IN') {
    let {id, name, sharedSchedule} = action.data;
    if (sharedSchedule === undefined) {
      sharedSchedule = null;
    }
    return {
      isLoggedIn: true,
      hasSkippedLogin: false,
      sharedSchedule,
      id,
      name,
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

export default user;