import { StatusBar } from 'expo-status-bar'
import { StyleSheet,  View } from 'react-native'
import { AppNavigator } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<View style={styles.container}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </SafeAreaProvider>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})