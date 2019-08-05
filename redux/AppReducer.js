import { combineReducers } from 'redux';
import User from '../data/pojo/User'

const INITIAL_STATE = {
  friendList: []
};

const friendReducer = function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'ADD_FRIEND':

      const {
        friendList,
      } = state;

      array = [];
      array = friendList;
      
      array.push({ key : action.payload })

      const newState = { friendList: Array.from(array) };
      return newState;

    case 'REMOVE_FRIEND':
      
      var array = [...state.friendList];
      var index = action.payload
      console.log(`Index is ${index}`)
      filteredData = array.filter(item => item.id !== index);
      console.log(array)
      const newRemState = { friendList: Array.from(filteredData) }
      return newRemState;


    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
});