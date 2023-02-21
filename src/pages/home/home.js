import React, {Component} from 'react'
import {Box, Button} from 'native-base'
import {Flex, Center} from 'native-base'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {navigation} = this.props

    return (
      <Box bg={['red.400', 'blue.400']} flex={1}>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Center size="16" bg="primary.100" _text={{color: 'coolGray.800'}}>
            100
          </Center>
        </Flex>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Center size="16" bg="primary.100" _text={{color: 'coolGray.800'}}>
            100
          </Center>
        </Flex>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Center size="16" bg="primary.100" _text={{color: 'coolGray.800'}}>
            100
          </Center>
        </Flex>

        <Flex direction="row" mb="2.5" mt="1.5">
          <Center size="16" bg="primary.100" _text={{color: 'coolGray.800'}}>
            100
          </Center>
        </Flex>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Center size="16" bg="primary.100" _text={{color: 'coolGray.800'}}>
            100
          </Center>
        </Flex>

        <Button onPress={() => navigation.push('详情')}>Click Me</Button>
      </Box>
    )
  }
}

export default Home
