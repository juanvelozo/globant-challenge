import { ActivityIndicator, FlatList, RefreshControl, Text } from 'react-native'
import { useCharacters } from '../../hooks/useCharacters'
import { Layout } from '../../components/common/Layout'
import { Input } from '../../components/common/Input/Input'
import { CharacterCard } from '../../components/Characters/CharacterCard'
import { useEffect, useState } from 'react'

export const Home = (): JSX.Element => {
	// constants

	// states
	const [page, setPage] = useState<number>(1)
	const [refreshing, setRefreshing] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<string>('')
	// hooks
	const { characters, loading, fetchCharacters } = useCharacters()
	// functions
	function handleOnChange(payload: string): void {
		setSearchValue(payload)
	}

	function RefetchData(): void{
		setRefreshing(true)
		fetchCharacters(page, searchValue).then(()=> { setRefreshing(false); })
	}
	// effects
	useEffect(() => {
		fetchCharacters(page, searchValue)
	}, [page, searchValue])

	// render
	return (
		<Layout>
			<Text style={{ fontSize: 40, fontWeight: 'bold' }}>
				Rick and morty app
			</Text>
			<Input
				placeholder="Search"
				icon="search1"
				onChangeText={handleOnChange}
				value={searchValue}
			/>
			{loading && !refreshing ? (
				<ActivityIndicator />
			) : (
				<FlatList
					refreshing={refreshing}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={RefetchData}
							colors={['#9Bd35A', '#689F38']}
							progressBackgroundColor="#ffffff"
						/>
					}
					data={characters?.results
						.slice(0, 10)
						.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))}
					renderItem={({ item }) => <CharacterCard data={item} />}
				/>
			)}
		</Layout>
	)
}
