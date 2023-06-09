import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from './icon.interface'

const CatalogIcon: React.FC<IIcon> = props => {
  return (
    <Svg
      width={props.size + 3}
      height={props.size}
      viewBox="0 0 24 21"
      fill="none"
    >
      <Path
        d="M1 8.00165L4 8.00165M1 3.00165L6 3.00165M1 13.0016L6 13.0016M18.9584 14.3458C22.4622 12.712 23.9781 8.54712 22.3443 5.04334C20.7104 1.53956 16.5456 0.0236767 13.0418 1.65752C9.53801 3.29136 8.02212 7.45622 9.65596 10.96C11.2898 14.4638 15.4547 15.9797 18.9584 14.3458ZM18.9584 14.3458L21.494 19.7837"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default CatalogIcon
