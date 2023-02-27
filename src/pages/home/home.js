import React from 'react'
import {Box, VStack, Center} from 'native-base'
import {TouchableWithoutFeedback} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function () {
  const navigation = useNavigation()

  const routeArr = [
    {title: 'ChatGPT', path: 'ChatGPT'},
    {title: 'detail', path: '详情'}
  ]

  return (
    <Box bg={['primary.400', 'blue.400']} flex={1}>
      <Center flex={1} w="100%" h="100%">
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
                {i.title}
              </Center>
            </TouchableWithoutFeedback>
          ))}
        </VStack>
      </Center>
    </Box>
  )
}
