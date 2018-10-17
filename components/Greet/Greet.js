import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Greet extends Component {
  constructor(props) {
    super();
  }

  render () {
    return (
      <View>
        <Text>ola {this.props.name}</Text>
      </View>
    );
  }
}

export default Greet;
