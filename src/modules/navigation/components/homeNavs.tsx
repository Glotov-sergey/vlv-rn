import { Home, HomeCatalog } from '@/screens/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeStackParams } from '../types/root'

const HomeStack = createNativeStackNavigator<HomeStackParams>()

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="HomeCategory"
        options={{ headerShown: false }}
        component={HomeCatalog}
      />
    </HomeStack.Navigator>
  )
}

export default HomeScreenStack
