import { type FC } from 'react'
import { View } from 'react-native'
import { type ICardProps } from './types'
import { styles } from './styles'

export const Card: FC<ICardProps> = (props): JSX.Element => {
	// constants

	// states

	// hooks

	// functions

	// effects

	// render

	return (
		<View style={styles.card} {...props}>
			{props.children}
		</View>
	)
}
