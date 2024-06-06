import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
	MainComponents,
	type RootStackNavigator,
	RootStackRoutesEnum,
} from './types'

const { Navigator, Screen } = createNativeStackNavigator<RootStackNavigator>()

export function MainNavigator() {
	return (
		<Navigator initialRouteName={RootStackRoutesEnum.Home}>
			{Object.values(RootStackRoutesEnum).map((route, index) => {
				return (
					<Screen
						key={index}
						name={route}
						component={MainComponents[route]}
						options={{
							headerShown: route !== RootStackRoutesEnum.Home,
							headerShadowVisible: false,
							headerTransparent: true,
							title: '',
							headerTintColor: '#fff',animation:'slide_from_right'
						}}
					/>
				)
			})}
		</Navigator>
	)
}
