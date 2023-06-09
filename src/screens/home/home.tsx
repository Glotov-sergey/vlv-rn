import { Container } from '@/components/ui'
import { HomeCategories, Onboarding } from '@/modules/home'
import { HomeStackParams } from '@/modules/navigation/types/root'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView } from 'react-native'

type HomeStackScreenProps = NativeStackScreenProps<
  HomeStackParams,
  'HomeScreen'
>

const Home = ({ navigation }: HomeStackScreenProps) => {
  return (
    <Container>
      <ScrollView>
        <Onboarding />
        <HomeCategories />
      </ScrollView>
    </Container>
  )
}

export default Home
