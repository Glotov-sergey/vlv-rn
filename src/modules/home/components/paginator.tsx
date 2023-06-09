import { Box } from '@/components/ui'
import React from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { ISlide } from '../types/slides.interface'

interface IPaginatorProps {
  items: ISlide[]
  scrollX: any
}

const Paginator: React.FC<IPaginatorProps> = ({ items, scrollX }) => {
  const { width } = useWindowDimensions()
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      style={{ transform: [{ translateY: -30 }] }}
    >
      {items.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp'
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })

        return (
          <Animated.View
            key={i}
            style={{
              height: 8,
              borderRadius: 5,
              backgroundColor: 'white',
              marginHorizontal: 5,
              width: dotWidth,
              opacity
            }}
          ></Animated.View>
        )
      })}
    </Box>
  )
}

export default Paginator
