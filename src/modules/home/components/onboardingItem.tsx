import { Box, Text } from '@/components/ui'
import React from 'react'
import { Image, useWindowDimensions } from 'react-native'
import { ISlide } from '../types/slides.interface'

interface IOnboardingItem {
  item: ISlide
}

const OnboardingItem: React.FC<IOnboardingItem> = ({ item }) => {
  const { width } = useWindowDimensions()
  return (
    <Box
      position="relative"
      width={width}
      flex={1}
      height={565}
      flexDirection="column"
      justifyContent="flex-end"
      borderBottomRightRadius={40}
    >
      <Image
        source={item.imageUrl}
        style={{
          flex: 0.7,
          position: 'absolute',
          justifyContent: 'center',
          width,
          height: '100%',
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24
        }}
      />
      <Text
        variant="header"
        color="white"
        textAlign="center"
        paddingBottom="xxl"
      >
        {item.title}
      </Text>
    </Box>
  )
}

export default OnboardingItem
