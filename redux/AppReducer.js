import { combineReducers } from 'redux';

const INITIAL_STATE = {
  friendList: []
};

const friendReducer = function(state = INITIAL_STATE, action){

  switch (action.type) {
    case 'ADD_FRIEND':

      const {
        friendList,
      } = state;

      array = [];
      array = friendList;
      array.push({key : action.payload})

      const newState = { friendList: [...array] };
      return newState;

    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
});