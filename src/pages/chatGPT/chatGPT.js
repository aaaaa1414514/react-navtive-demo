import React, {Component} from 'react'
import {Text} from 'react-native'
import {Box, Center} from 'native-base'

export default class Detail extends Component {
  render() {
    const {navigation} = this.props

    return <Box safeArea safeAreaTop="0" bg={['red.400', 'blue.400']} flex={1}></Box>
  }
}
