import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Detail extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Detail Screen</Text>

        <Button title="返回" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
