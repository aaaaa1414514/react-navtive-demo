import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home/home';
import Detail from '../pages/detail/detail';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="首页">
    <Stack.Screen name="首页" component={Home} />
    <Stack.Screen name="详情" component={Detail} />
  </Stack.Navigator>
);
