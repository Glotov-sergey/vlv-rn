import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from './icon.interface'

const WishlistIcon: React.FC<IIcon> = props => {
  return (
    <Svg
      width={props.size + 2}
      height={props.size}
      viewBox="0 0 22 20"
      fill={props.color === '#F7553D' ? props.color : 'none'}
    >
      <Path
        d="M6.5 1.00065C8.39766 1.00066 9.99062 1.99572 11 3.50065C11.9985 1.99572 13.6024 1.02897 15.5 1.00065C18.6783 0.953214 21 3.50065 21 7.00065C21 11.0046 16.6701 15.4601 11 19.0007C5.31202 15.4679 1 11.199 1 7.00065C1 3.50065 3.32136 1.00063 6.5 1.00065Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default WishlistIcon
