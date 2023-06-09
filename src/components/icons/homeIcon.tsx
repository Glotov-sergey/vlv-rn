import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from './icon.interface'

const HomeIcon: React.FC<IIcon> = props => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.5 1C18.15 1 19 1.84996 19 4.5C19 7.15004 18.15 8 15.5 8C12.85 8 12 7.15004 12 4.5C12 1.84996 12.85 1 15.5 1Z"
        stroke={props.color}
        fill={props.color === '#F7553D' ? props.color : 'transparent'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.5 1C7.15004 1 8 1.84996 8 4.5C8 7.15004 7.15004 8 4.5 8C1.84996 8 1 7.15004 1 4.5C1 1.84996 1.84996 1 4.5 1Z"
        stroke={props.color}
        fill={props.color === '#F7553D' ? props.color : 'transparent'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill={props.color === '#F7553D' ? props.color : 'transparent'}
        d="M4.5 12C7.15004 12 8 12.85 8 15.5C8 18.15 7.15004 19 4.5 19C1.84996 19 1 18.15 1 15.5C1 12.85 1.84996 12 4.5 12Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill={props.color === '#F7553D' ? props.color : 'transparent'}
        d="M15.5 12C18.15 12 19 12.85 19 15.5C19 18.15 18.15 19 15.5 19C12.85 19 12 18.15 12 15.5C12 12.85 12.85 12 15.5 12Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
