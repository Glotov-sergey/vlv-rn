import React from 'react'
import { Animated } from 'react-native'
import { Box, Text } from '@/components/ui'
import { FlatList } from 'react-native'
import OnboardingItem from './onboardingItem'
import { slidesData } from '../utils/slides.data'
import Paginator from './paginator'

const Onboarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <Box>
      <FlatList
        data={slidesData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <Paginator scrollX={scrollX} items={slidesData} />
    </Box>
  )
}

export default Onboarding
