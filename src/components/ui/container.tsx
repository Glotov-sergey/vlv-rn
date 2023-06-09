import React from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/theme/light'
import Box from './box'

type Props = BoxProps<Theme> & {
  children: React.ReactNode
}

// Other boxes inside container makes rounded bottom side
const Container: React.FC<Props> = props => (
  <Box {...props} flex={1} backgroundColor="mainBackground">
    {props.children}

    <Box
      position="absolute"
      bottom={0}
      left={0}
      backgroundColor="mainBackground"
      borderRadius={300}
      width={48}
      height={48}
      zIndex={-1}
    ></Box>
    <Box
      position="absolute"
      bottom={0}
      left={0}
      backgroundColor="white"
      width={24}
      borderTopLeftRadius={10}
      height={24}
      zIndex={-2}
    ></Box>
    <Box
      position="absolute"
      bottom={0}
      right={0}
      backgroundColor="mainBackground"
      borderRadius={300}
      width={48}
      height={48}
      zIndex={-1}
    ></Box>
    <Box
      position="absolute"
      bottom={0}
      right={0}
      backgroundColor="white"
      width={24}
      borderTopLeftRadius={10}
      height={24}
      zIndex={-2}
    ></Box>
  </Box>
)

export default Container
