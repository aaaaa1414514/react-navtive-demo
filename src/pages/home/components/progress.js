import React from 'react'
import {Box, Center, Stack, ScrollView, Text} from 'native-base'
import {ProgressCircle} from 'react-native-svg-charts'

export default ({mt}) => {
  const navArr = [
    {
      title: '本月余额',
      bg: '#f56c61',
      progressColor: '#fbc4c0',
      fontColor: 'warmGray.50',
      count: '35,123',
      progress: 0.9
    },
    {
      title: '本月支出',
      bg: '#ffd465',
      progressColor: '#aa822a',
      fontColor: '#2d2c4d',
      count: '120,123',
      progress: 0.5
    },
    {
      title: '本月收入',
      bg: '#ffd465',
      progressColor: '#aa822a',
      fontColor: '#2d2c4d',
      count: '35,123',
      progress: 0.5
    }
  ]
  return (
    <Box flexDirection="row" mt={mt} alignItems="center">
      <ScrollView horizontal>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          {navArr.map(i => (
            <Box bg={i.bg} width="125px" p="12px" borderRadius="md" shadow="5">
              <ProgressCircle
                style={{width: 60, height: 60}}
                progress={i.progress}
                progressColor={i.progressColor}
                strokeWidth="8"
              />

              <Text mt="24px" color={i.fontColor} fontWeight="bold" fontSize="16px">
                {i.title}
              </Text>
              <Text fontWeight="bold" color={i.fontColor} mt="4px">
                ￥ {i.count}
              </Text>
            </Box>
          ))}

          {/* <Box bg="#ffd465" width="120px" p="12px" borderRadius="md" shadow="5">
            <ProgressCircle style={{height: 50}} progress={0.7} progressColor={'#a87f27'} />

            <Text fontWeight="bold" ontSize="xl">
              本月收入
            </Text>
            <Text fontWeight="bold" mt="4px">
              ￥ 400,000
            </Text>
          </Box> */}
        </Stack>
      </ScrollView>
    </Box>
  )
}
