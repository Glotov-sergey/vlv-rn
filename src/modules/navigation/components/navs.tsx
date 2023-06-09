import { HomeCatalog } from '@/screens/home'
import {
  CartIcon,
  CatalogIcon,
  HomeIcon,
  ProfileIcon,
  WishlistIcon
} from '@/components/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { RootStackParams } from '../types/root'
import HomeScreenStack from './homeNavs'

const RootStack = createBottomTabNavigator<RootStackParams>()

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#F7553D',
        tabBarInactiveTintColor: '#7E7574',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0
        }
      })}
    >
      <RootStack.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => <HomeIcon size={18} color={color} />,
          tabBarLabel: 'Главная'
        }}
      />
      <RootStack.Screen
        name="Catalog"
        component={HomeCatalog}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => <CatalogIcon size={21} color={color} />,
          tabBarLabel: 'Каталог'
        }}
      />
      <RootStack.Screen
        name="Cart"
        component={HomeCatalog}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => <CartIcon size={20} color={color} />,
          tabBarLabel: 'Корзина'
        }}
      />
      <RootStack.Screen
        name="Wishlist"
        component={HomeCatalog}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => <WishlistIcon size={20} color={color} />,
          tabBarLabel: 'Вишлист'
        }}
      />

      <RootStack.Screen
        name="Profile"
        component={HomeCatalog}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => <ProfileIcon size={20} color={color} />,
          tabBarLabel: 'Профиль'
        }}
      />
    </RootStack.Navigator>
  )
}

export default RootNavigation
