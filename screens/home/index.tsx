import {
	FlatList,
	Image,
	Keyboard,
	Text,
	View,
} from 'react-native'
import { useCharacters } from '../../hooks/useCharacters'
import { Layout } from '../../components/common/Layout'
import { Input } from '../../components/common/Input/Input'
import { CharacterCard } from '../../components/Characters/CharacterCard'
import { useEffect, useState } from 'react'
import { Button } from '../../components/common/Button'
import { DancerMorty } from '../../components/lottie/DancerMorty'

export const Home = (): JSX.Element => {
	// constants

	// states
	const [page, setPage] = useState<number>(1)
	const [searchValue, setSearchValue] = useState<string>('')
	// hooks
	const { characters, loading, fetchCharacters } = useCharacters()
	// functions
	function handleOnChange(payload: string): void {
		setPage(1)
		setSearchValue(payload)
	}
	async function fetch(): Promise<void> {
		await fetchCharacters(page, searchValue)
	}
	// effects
	useEffect(() => {
		fetch()
	}, [page, searchValue])

	// render
	return (
		<>
			<Image
				source={{ uri: 'https://i.redd.it/0z3140ximmd01.jpg' }}
				style={{ width: '100%', height: 140 }}
			/>
			<Image
				source={{
					uri: 'https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png',
				}}
				style={{
					width: 160,
					height: 50,
					position: 'absolute',
					top: 20,
					marginHorizontal: 20,
				}}
			/>
			<View
				style={{
					width: '90%',
					position: 'absolute',
					marginHorizontal: 20,
					top: 70,
				}}
			>
				<Input
					placeholder="Search"
					icon="search1"
					onChangeText={handleOnChange}
					value={searchValue}
					style={{}}
				/>
			</View>
			<Layout>
				{loading ? (
					<View style={{height:200, aspectRatio: 1, position:'absolute', marginHorizontal: '25%', top: '20%'}}>
						<DancerMorty/>
					</View>
				) : (
					<FlatList
						data={characters?.results
							.slice(0, 10)}
						renderItem={({ item }) => <CharacterCard data={item} />}
						ItemSeparatorComponent={() => (
							<View
								style={{
									height: 1,
									backgroundColor: '#00000000',
									marginVertical: 8,
								}}
							/>
						)}
					/>
				)}
			</Layout>
			{characters?.results.length && 
			<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around',
				paddingVertical: 10
			}}
			>
				<Button
					title="Previous"
					disabled={page === 1}
					onPress={() => {
						Keyboard.dismiss()
						setPage(prev => prev - 1)
					}}
					/>
				<Text>Page {page}</Text>
				<Button
					title="Next"
					disabled={characters?.results.length < 10}
					onPress={() => {
						Keyboard.dismiss()
						setPage(prev => prev + 1)
					}}
					/>
			</View>
			}
		</>
	)
}
