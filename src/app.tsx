import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import RootNavigation from './modules/navigation/components/navs'
import light from './theme/light'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
