const initialState = { tab: 'home' };

function navigation(state = initialState, action) {
    if (action.type === 'SWITCH_TAB') {
        return {...state, tab: action.tab};
    }
    
    if (action.type === 'LOGGED_OUT') {
        return initialState;
    }
    
    return state;
}

export default navigation;