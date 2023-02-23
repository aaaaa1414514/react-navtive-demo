import React from 'react'
import {Text} from 'react-native'
import {Box, Center, Input, Button} from 'native-base'
import ScrollView from '../../components/scrollView/scrollView'

export default () => {
  const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 100))

  return (
    <Box safeArea safeAreaTop="0" bg={['red.400', 'blue.400']} flex={1}>
      <ScrollView flex={1}>
        {arr.map(i => (
          <Center>{i}</Center>
        ))}
      </ScrollView>

      <Box flexDirection="row" h="48px" p="8px" justifyContent="center" bg={['#fff', '#000']}>
        <Input mr="8px" flex={1} placeholder="Input" />
        <Button size="sm">发射</Button>
      </Box>
    </Box>
  )
}
