import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from './icon.interface'

const ProfileIcon: React.FC<IIcon> = props => {
  return (
    <Svg
      width={props.size}
      height={props.size + 2}
      viewBox="0 0 20 22"
      fill={props.color === '#F7553D' ? props.color : 'none'}
    >
      <Path
        d="M1 20.5V19.5C1 15.634 4.13401 12.5 8 12.5H12C15.866 12.5 19 15.634 19 19.5V20.5"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 10C12.4853 10 14.5 7.98528 14.5 5.5C14.5 3.01472 12.4853 1 10 1C7.51472 1 5.5 3.01472 5.5 5.5C5.5 7.98528 7.51472 10 10 10Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default ProfileIcon
