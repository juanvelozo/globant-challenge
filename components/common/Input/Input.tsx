import { type FC } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { type InputProps } from './types'
import { styles } from './styles'

export const Input: FC<InputProps> = props => {
	// render
	return (
		<View style={styles.container}>
			{props.icon && (
				<Icon name={props.icon} size={20} color="#888" style={styles.icon} />
			)}
			<TextInput style={styles.input} {...props} />
		</View>
	)
}
