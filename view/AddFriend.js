import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../redux/AddFriendAction';

var friendList = []

class AddFriend extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      friend: '',
      enteredName: '',
      friendList2: []
    };
    this.friendDetail = this.friendDetail.bind(this);
  }

  friendDetail() {
    newFriend = this.state.enteredName
    this.setState({ friend: newFriend })

    friendList.push(newFriend);
    this.setState({ friendList2: friendList })

    // this.props.screenProps.addFriend(newFriend)

    this.props.friends.possible.map((friend, index) => (
          this.props.addFriend(index)
    ))
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
          onPress={this.friendDetail}
          title="Add Friend"
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

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFriend,
  }, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps )(AddFriend);