import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
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
    };
    this.friendDetail = this.friendDetail.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });

  friendDetail() {
    newFriend = this.state.enteredName
    this.setState({ friend: newFriend })

    console.log("clicked")

    this.props.addFriend(newFriend)
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

const mapStateToProps = function(state)  {
  const { friends } = state
  return { friends }
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({
    addFriend,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);