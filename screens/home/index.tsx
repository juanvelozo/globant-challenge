import {
	Image,
	Keyboard,
	Text,
	View,
 Animated } from 'react-native'
import { useCharacters } from '../../hooks/useCharacters'
import { Layout } from '../../components/common/Layout'
import { Input } from '../../components/common/Input/Input'
import { CharacterCard } from '../../components/Characters/CharacterCard'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/common/Button'
import { DancerMorty } from '../../components/lottie/DancerMorty'


export const Home = (): JSX.Element => {
	// constants
	const scrollY = useRef(new Animated.Value(0)).current;
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
				testID='RnMLogo'
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
					<Animated.FlatList
					onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}],{useNativeDriver: true})}
						data={characters?.results
							.slice(0, 10)}
						renderItem={({ item, index }) => {
							const inputRange = [-1, 0, 100 * index, 100 * (index *2 )]
							const scale = scrollY.interpolate({inputRange, outputRange:[1,1,1,0]})
							return(<Animated.View style={{transform:[{scale}]}}><CharacterCard data={item} /></Animated.View>)
						}}
						ItemSeparatorComponent={() => (
							<View
								style={{
									height: 1,
									backgroundColor: '#00000000',
									marginVertical: 5,
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
