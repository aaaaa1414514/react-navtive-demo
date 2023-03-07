import React from 'react'
import {Box, Text, Center} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({mt}) => {
  const arr = [
    {title: '支出', type: 1},
    {title: '收入', type: 1},
    {title: '全部', type: 1}
  ]
  return (
    <Box mt={mt}>
      <Box
        borderRadius="md"
        flexDirection="row"
        alignContent="center"
        shadow="1"
        p="8px"
        bg="white">
        <Icon color="#2d2c4d" size={24} name="paper-roll" />
        <Box ml="8px" flex={1}>
          <Text fontWeight="bold">日用</Text>
        </Box>
        <Text px="8px" fontWeight="bold">
          -100
        </Text>
      </Box>

      <Box
        mt="4px"
        borderRadius="md"
        flexDirection="row"
        alignContent="center"
        shadow="1"
        p="8px"
        bg="white">
        <Icon color="#2d2c4d" size={24} name="paper-roll" />
        <Box ml="8px" flex={1}>
          <Text fontWeight="bold">日用</Text>
        </Box>
        <Text px="8px" fontWeight="bold">
          -100
        </Text>
      </Box>
    </Box>
  )
}
