async function _logInWithOAuth(username, password) {
  
  //TODO
  const profile = {
    id: 340,
    name: 'Ann Smith'
  };
  
  const action = {
    type: 'LOGGED_IN',
    data: {
      id: profile.id,
      name: profile.name,
    },
  };

  return Promise.all([
    Promise.resolve(action)
  ]);
}

function logInWithOAuth(username, password) {
  return (dispatch) => {
    const login = _logInWithOAuth(username, password);

    // Loading friends schedules shouldn't block the login process
    login.then(
      (result) => {
        dispatch(result);
      }
    );
    return login;
  };
}

function logOut() {
  return (dispatch) => {
    //TODO;
    
    return dispatch({
      type: 'LOGGED_OUT'
    });
  }
}

module.exports = { logInWithOAuth, logOut };