import * as React from 'react'
import Router from './src/router/index'
import {NavigationContainer} from '@react-navigation/native'
import {NativeBaseProvider, extendTheme} from 'native-base'
import newTheme from './src/theme/theme'
import Footer from './src/components/footer/footer.js'
import 'moment/locale/zh-cn'

const theme = extendTheme({
  colors: newTheme,
  components: {
    Text: {
      baseStyle: {
        color: '#2d2c4d'
      }
    }
  }
})

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* 路由内容 */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>

      {/* footer */}
      {/* <Footer /> */}
    </NativeBaseProvider>
  )
}

export default App
