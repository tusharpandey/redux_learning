import AddFriend from './AddFriend.js'
import FriendList from './FriendList.js'
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppStack = createStackNavigator(
    {
        addFriend: AddFriend,
        friendList: FriendList
    },
    {
        initialRouteName: 'friendList',
    },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer
