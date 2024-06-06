import { type FC } from 'react'
import { Text, Image, Pressable, View } from 'react-native'
import { type ICharacterCardProps } from './types'
import { useNavigation } from '@react-navigation/core'
import { type mainNavProp } from '../../navigation/main/types'
import { Card } from '../common/Card'
import Icon from 'react-native-vector-icons/AntDesign'

export const CharacterCard: FC<ICharacterCardProps> = ({
	data,
}): JSX.Element => {
	// constants

	// states

	// hooks
	const { navigate } = useNavigation<mainNavProp>()
	// functions
	function handleNavigate(): void {
		navigate('CharacterPage', data)
	}
	// effects

	// render

	return (
		<Pressable onPress={handleNavigate}>
			<Card>
				<Image
					source={{ uri: data?.image }}
					style={{
						width: 100,
						height: 100,
						borderTopLeftRadius: 20,
						borderBottomLeftRadius: 20,
						position: 'absolute',
					}}
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							minHeight: 60,
							justifyContent: 'center',
							marginHorizontal: 10,
							alignItems: 'flex-end',
						}}
					>
						<Text style={{ fontSize: 16 }}>{data?.name}</Text>
						<Text>{data?.species}</Text>
					</View>
					<Icon name="rightcircleo" size={20} />
				</View>
			</Card>
		</Pressable>
	)
}
