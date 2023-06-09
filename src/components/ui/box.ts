import React from 'react'
import { Theme } from '@/theme/light'
import { createBox } from '@shopify/restyle'

const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>

export default Box
