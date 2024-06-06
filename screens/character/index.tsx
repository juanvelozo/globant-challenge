import { type RouteProp, useRoute } from '@react-navigation/core'
import { View, Text, Image } from 'react-native'
import { type RootStackNavigator } from '../../navigation/main/types'
import { Layout } from '../../components/common/Layout'
import { IconLabel } from '../../components/common/IconLabel'
import { Card } from '../../components/common/Card'

export const CharacterScreen = (): JSX.Element => {
	// constants
	const { params } = useRoute<RouteProp<RootStackNavigator, 'CharacterPage'>>()

	// states

	// hooks

	// functions

	// effects

	// render

	return (
		<>
			<Image
				source={{ uri: 'https://i.redd.it/0z3140ximmd01.jpg' }}
				style={{ width: '100%', height: 200 }}
			/>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'absolute',
					top: 70,
					left: 0,
					right: 0,
				}}
			>
				<Image
					source={{ uri: params?.image }}
					style={{ width: 150, height: 150, borderRadius: 100 }}
				/>
			</View>
			<Layout>
				<Text
					style={{
						fontSize: 28,
						fontWeight: 'bold',
						marginBottom: 15,
						textAlign: 'center',
					}}
				>
					{params?.name}
				</Text>
				<Card>
					<IconLabel icon="user" text={'Gender: ' + params?.gender ?? ''} />
					<IconLabel
						icon="infocirlceo"
						text={'Status: ' + params?.status ?? ''}
					/>
					{params?.type && (
						<IconLabel icon="tags" text={'Type: ' + params?.type ?? ''} />
					)}
					<IconLabel
						icon="enviromento"
						text={'Location: ' + params?.location.name ?? ''}
					/>
					<IconLabel icon="staro" text={'From: ' + params?.origin.name ?? ''} />
					<IconLabel
						icon="playcircleo"
						text={'Appears on ' + params?.episode.length + ' episodes'}
					/>
				</Card>
			</Layout>
		</>
	)
}
