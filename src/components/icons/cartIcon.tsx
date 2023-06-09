import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from './icon.interface'

const CartIcon: React.FC<IIcon> = props => {
  return (
    <Svg
      width={props.size}
      height={props.size + 2}
      viewBox="0 0 20 22"
      fill="none"
    >
      <Path
        d="M6 7H3L1.57143 17M6 7H14M6 7V9M6 7V5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5V7M14 7H17L18.4286 17M14 7V9M1.57143 17L1 21H19L18.4286 17M1.57143 17H18.4286"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default CartIcon
