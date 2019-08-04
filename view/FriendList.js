import React from 'react'
import { StyleSheet, Text,View, ToolbarAndroid, FlatList, Platform, StatusBar } from 'react-native';
import FriendItem from './FriendItem.js'
import GetUserDetailUseCase from '../domain/GetUserDetailUseCase.js';
import { connect } from 'react-redux';

class FriendList extends React.Component {

    constructor() {
        super()
        this.onActionSelected = this.onActionSelected.bind(this);

        new GetUserDetailUseCase().executeGetUserDetailUseCase()
    }

    static navigationOptions = {
        header: null
    };

    onActionSelected(position) {
        if (position === 0) {
            this.props.navigation.navigate('addFriend',{title: 'Add Friends'});
        }
    }

    render() {

        return (
            <View style={styles.containerToolbar}>
                
                <ToolbarAndroid style={styles.toolbar}
                    title="Friends"
                    actions={[{
                        title: 'Add friends',
                        //  icon: AppImage.appLogo,
                        show: 'always'
                    }]}
                    onActionSelected={this.onActionSelected}
                />

                <FlatList
                    data={this.props.friends.friendList}
                    renderItem={({ item }) => <FriendItem name={item.key} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerToolbar: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    menuIcons: {
        backgroundColor: '#e9eaed',
        height: 24,
    },

});

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
};

export default connect(mapStateToProps)(FriendList);