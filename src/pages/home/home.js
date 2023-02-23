import React from 'react'
import {Box, VStack, Center} from 'native-base'
import {TouchableWithoutFeedback} from 'react-native'
// import {navigation} from '../../utils/utils'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'

export default function () {
  const navigation = useNavigation()

  const routeArr = [{title: 'ChatGPT', path: 'ChatGPT'}]

  return (
    <Box safeArea safeAreaTop="0" bg={['primary.400', 'blue.400']} flex={1}>
      <Center w="100%" h="100%">
        <VStack space={4} alignItems="center">
          {routeArr.map(i => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.push(i.path)
              }}>
              <Center
                _text={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 24
                }}
                w="64"
                h="20"
                bg="primary.600"
                rounded="md"
                shadow={3}>
                chatGPT
              </Center>
            </TouchableWithoutFeedback>
          ))}
        </VStack>
      </Center>
    </Box>
  )
}
