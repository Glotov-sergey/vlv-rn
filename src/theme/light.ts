import { createTheme } from '@shopify/restyle'

const palette = {
  primaryRed: '#F7553D',
  secondaryRed: '#FFECEF',
  black: '#271815',
  gray: '#776C69',
  lightGray: '#CBC8C7',
  white: '#FFFFFF',
  backgroundColor: '#F0EBE7'
}

const theme = createTheme({
  colors: {
    mainBackground: palette.backgroundColor,
    mainTitle: palette.black,
    textColor: palette.black,
    secondaryText: palette.gray,
    primaryColor: palette.primaryRed,
    white: palette.white
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 58
  },
  textVariants: {
    header: {
      fontSize: 24,
      textTransform: 'uppercase',
      lineHeight: 32,
      color: 'textColor',
      fontFamily: 'optima'
    },
    subText: {
      color: 'secondaryText',
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'circe-regular'
    },
    boldText: {
      color: 'white',
      fontSize: 16,
      textTransform: 'uppercase',
      lineHeight: 24,
      fontFamily: 'circe-bold'
    },
    buttonText: {
      color: 'white'
    }
  }
})

export type Theme = typeof theme
export default theme
