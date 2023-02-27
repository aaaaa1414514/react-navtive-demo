import * as React from 'react'
import Router from './src/router/index'
import {NavigationContainer} from '@react-navigation/native'
import {NativeBaseProvider, extendTheme} from 'native-base'
import newTheme from './src/theme/theme'
import Footer from './src/components/footer/footer.js'

const theme = extendTheme({colors: newTheme})

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* 路由内容 */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>

      {/* footer */}
      <Footer />
    </NativeBaseProvider>
  )
}

export default App
