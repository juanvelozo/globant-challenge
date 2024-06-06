import { type FC } from 'react'
import {  Text, Image, Pressable } from 'react-native'
import { type ICharacterCardProps } from './types'
import { useNavigation } from '@react-navigation/core'
import { type mainNavProp } from '../../navigation/main/types'

export const CharacterCard: FC<ICharacterCardProps> = ({
	data,
}): JSX.Element => {
	// constants

	// states

	// hooks
    const {navigate} = useNavigation<mainNavProp>()
	// functions
    function handleNavigate():void{
        navigate('CharacterPage',data)
    }
	// effects

	// render

	return (
		<Pressable
            onPress={handleNavigate}
			style={{
				flexDirection: 'row',
				borderRadius: 20,
				backgroundColor: '#fff',
				marginVertical: 5,
			}}
		>
			<Image
				source={{ uri: data?.image }}
				style={{
					width: 100,
					height: 100,
					borderTopLeftRadius: 20,
					borderBottomLeftRadius: 20,
				}}
			/>
			<Text style={{ color: '#000' }}>{data?.name}</Text>
		</Pressable>
	)
}
