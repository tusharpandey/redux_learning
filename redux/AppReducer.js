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
      temparray = []
      for(var i = 0 ; i < array.length ; i++){
        if(i!=index){
          temparray.push({ key : array[i].key })
        }
      }
      console.log(temparray)
      const newRemState = { friendList: Array.from(temparray) }
      return newRemState;


    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
});