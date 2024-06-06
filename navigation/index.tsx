import {
	NavigationContainer,
	type NavigationContainerRef,
} from '@react-navigation/native'
import { useRef } from 'react'
import { MainNavigator } from './main'
import { type RootStackNavigator } from './main/types'

export const AppNavigator = () => {
	// refs
	const navigationRef = useRef<NavigationContainerRef<RootStackNavigator>>(null)

	// render
	return (
		<NavigationContainer ref={navigationRef}>
			<MainNavigator />
		</NavigationContainer>
	)
}
