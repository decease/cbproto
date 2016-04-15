function logInWithOAuth(username, password) {
  return (dispatch) => {
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
      
      return new Promise((resolve) => {
         setTimeout(() => resolve(dispatch(action)), 3000);
      });
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

export { logInWithOAuth, logOut };