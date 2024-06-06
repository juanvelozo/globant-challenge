import { useState } from 'react'
import { type CharacterResponse } from '../helpers/types/types'
import axios from 'axios'

interface IGetCharacters {
	characters: CharacterResponse | null
	loading: boolean
	error: Error | null
	fetchCharacters: (page: number, charName: string) => Promise<void>
}

export function useCharacters(): IGetCharacters {
	// states
	const [characters, setCharacters] = useState<CharacterResponse | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)
	// functions
	async function fetchCharacters(page: number, charName: string) {
		setLoading(true)
		try {
			const response = await axios.get<CharacterResponse>(
				`https://rickandmortyapi.com/api/character?page${page}&name=${charName}&per_page=10`
			)
			setCharacters(response.data)
		} catch (error) {
			if (error instanceof Error) {
				setError(error)
			}
		} finally {
			setLoading(false)
		}
	}
	// side effects

	// return
	return { characters, loading, error, fetchCharacters }
}
