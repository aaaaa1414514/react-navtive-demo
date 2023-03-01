import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/home/home'
import Detail from '../pages/detail/detail'
import ChatGPT from '../pages/chatGPT/chatGPT'

const Stack = createNativeStackNavigator()

const ScreenOptions = {
  headerShown: false
}

export default () => (
  <Stack.Navigator initialRouteName="首页">
    <Stack.Screen options={ScreenOptions} name="首页" component={Home} />
    <Stack.Screen name="详情" component={Detail} />
    <Stack.Screen name="ChatGPT" component={ChatGPT} />
  </Stack.Navigator>
)
