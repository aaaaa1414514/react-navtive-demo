import React, {Component} from 'react';
import {Box, Button} from 'native-base';
import {Flex, Center} from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <Box bg={['red.400', 'blue.400']} flex={1}>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Center
            size="16"
            bg="primary.100"
            _text={{
              color: 'coolGray.800',
            }}>
            100
          </Center>
          <Center
            size="16"
            bg="primary.200"
            _text={{
              color: 'coolGray.800',
            }}>
            200
          </Center>
          <Center
            bg="primary.300"
            size="16"
            _text={{
              color: 'coolGray.800',
            }}>
            300
          </Center>
          <Center
            size="16"
            bg="primary.400"
            _text={{
              color: 'coolGray.800',
            }}>
            400
          </Center>
        </Flex>

        <Button onPress={() => navigation.push('详情')}>Click Me</Button>
      </Box>
    );
  }
}

export default Home;
