import React from 'react'
import { Image } from 'react-native'
import { Box, Text } from '@/components/ui'
const HomeCategories = () => {
  return (
    <Box
      marginHorizontal="l"
      flexDirection="row"
      marginTop="xl"
      flexWrap="wrap"
      gap="xl"
    >
      <Box
        position="relative"
        width={164}
        height={164}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          style={{ position: 'absolute' }}
          source={require('../static/categories-1.png')}
        />
        <Text variant="boldText">Кольца</Text>
      </Box>
    </Box>
  )
}

export default HomeCategories
