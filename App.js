import * as React from 'react'
import Router from './src/router/index'
import {NavigationContainer} from '@react-navigation/native'
import {NativeBaseProvider, extendTheme} from 'native-base'
import newTheme from './src/theme/theme'

const theme = extendTheme({colors: newTheme})

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
