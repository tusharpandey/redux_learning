import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAction } from '../redux/AddFriendAction';
import { remAction } from '../redux/RemoveFriendAction';
import User from '../data/pojo/User';

class AddFriend extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      friend: '',
      enteredName: '',
      index: -1,
    };
    this.addFriend = this.friendDetail.bind(this);
    this.remFriend = this.removeFriend123.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });

  friendDetail() {
    
    console.log("add friend")

    newFriend = this.state.enteredName
    newIndex = this.props.friends.friendList.length
    this.setState({ friend: newFriend, index: newIndex })

    user = new User()
    user.name = newFriend
    user.id = newIndex

    this.props.addAction(user)
  }

  removeFriend123() {
    console.log("remove friend")
    newIndex = this.state.enteredName
    this.props.remAction(0)
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>{this.state.friend}</Text>

        <TextInput
          style={styles.textInputStyle}
          placeholder="friend Name"
          returnKeyLabel={"next"}
          onChangeText={(text) => this.setState({ enteredName: text })}
        />

        <Button
          onPress={this.addFriend}
          title="Add Friend"
          color="#841584"
        />

        <Button
          onPress={this.remFriend}
          title="Remove Friend"
          color="#841584"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = function (state) {
  const { friends } = state
  return { friends }
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    addAction, remAction
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);