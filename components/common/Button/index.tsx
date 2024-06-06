import { type FC } from 'react'
import { Text, Pressable } from 'react-native'
import { styles } from './styles'
import { type IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props): JSX.Element => {
	// constants

	// states

	// hooks

	// functions

	// effects

	// render

	return (
		<Pressable style={[styles.button, props.disabled && styles.buttonDisabled]} {...props}>
			<Text style={{ color: '#fff' }}>{props.title}</Text>
		</Pressable>
	)
}
