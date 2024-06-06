import { type ColorValue, StyleSheet } from 'react-native'

export const styles = (backgroundColor?: ColorValue) =>
	StyleSheet.create({
		layout: {
			backgroundColor,
			paddingVertical: 40,
			paddingHorizontal: 20,
			flex: 1,
			maxWidth: 420,
		},
	})
