import React from 'react'
import {Box, Text, Avatar, Heading} from 'native-base'

export default ({children}) => (
  <Box flexDirection="row" alignItems="center">
    <Box flex={1} mr="8px">
      <Heading numberOfLines={1} fontSize="2xl" fontWeight="bold">
        hello,美羊羊桑!
      </Heading>
      <Text mt="8px" numberOfLines={1}>
        一日之计在于晨
      </Text>
    </Box>
    <Box>
      <Avatar
        bg="primary.500"
        alignSelf="center"
        size="lg"
        source={{
          uri: 'https://invest-1255882558.cos.ap-guangzhou.myqcloud.com/INVEST/base/20230301/145501u4dwjs.png'
        }}
      />
    </Box>
  </Box>
)
