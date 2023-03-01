import {Box} from 'native-base'
import React from 'react'
// '#fafafc'
export default ({children}) => (
  <Box bg={['#fff', 'blue.400']} safeArea safeAreaBottom="24px" flex={1}>
    <Box bg={['#fcfbfe', 'blue.400']} p="24px" mx="24px" borderRadius="32px" flex={1}>
      {children}
    </Box>
  </Box>
)
