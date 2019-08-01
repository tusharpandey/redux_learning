import React from 'react'
import AppNavigator from './view/AppNavigator'

export default class App extends React.Component {

    constructor() {
        super()
        this.array = []
        this.state = {
            friendList: this.array
        }
        this.addFriend = this.addFriend.bind(this);
    }

    addFriend(friendName){
        this.array.push({key : friendName});
        this.setState({ friendList:  Array.from(this.array) })
    }

    render() {
        return (<AppNavigator
            screenProps={{
                friendList: this.state.friendList,
                addFriend: this.addFriend,
            }}
        />);
    }
}