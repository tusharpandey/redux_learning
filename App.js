import React from 'react'
import AppNavigator from './view/AppNavigator'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './redux/AppReducer';

const store = createStore(friendReducer);

export default class App extends React.Component {

    constructor() {
        super()
        this.array = []
        this.state = {
            friendList: this.array
        }
        this.addFriend = this.addFriend.bind(this);
    }

    addFriend(friendName) {
        this.array.push({ key: friendName });
        this.setState({ friendList: Array.from(this.array) })
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator
                    // screenProps={{
                    //     friendList: this.state.friendList,
                    //     addFriend: this.addFriend,
                    // }}
                />
            </Provider>);
    }
}