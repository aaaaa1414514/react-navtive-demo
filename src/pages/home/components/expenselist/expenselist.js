import React from 'react'
import {Box, Heading} from 'native-base'
import Calendar from './calendar'
import Tabs from '../../../../components/tabs'
export default ({mt}) => {
  return (
    <Box mt={mt}>
      <Box flexDirection="row" alignItems="center">
        <Heading numberOfLines={1} flex={1} fontSize="2xl" fontWeight="bold">
          2023年3月1日
        </Heading>

        <Calendar />
      </Box>

      <Tabs mt="16px" />
    </Box>
  )
}
