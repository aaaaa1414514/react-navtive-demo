import React, {useState} from 'react'
import {Box, Text, HStack, Center, Pressable} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

export default () => {
  const [selected, setSelected] = useState(1)

  const tabbar = [
    {name: '首页', icon: 'home'},
    {name: '我的', icon: 'user'}
  ]

  return (
    <Box width="100%">
      <HStack bg="#fff" alignItems="center" safeAreaBottom shadow={6}>
        {tabbar.map((i, index) => (
          <Pressable
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(index)}>
            <Center>
              <Icon name={i.icon} size={30} color="#4F8EF7" />
              <Text color="#000" fontSize="12">
                {i.name}
              </Text>
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  )
}
