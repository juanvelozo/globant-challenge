import '@expo/metro-runtime'
import { AppNavigator } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		// <View style={styles.container}>
			<SafeAreaProvider>
				<AppNavigator />
			</SafeAreaProvider>
		// </View>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 	},
// })
