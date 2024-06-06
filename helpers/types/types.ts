export interface Character {
	id: number
	name: string
	status: CharacterStatus
	species: string
	type: string
	gender: CharacterGender
	origin: {
		name: string
	}
	location: {
		name: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}

export type CharacterStatus = 'alive' | 'dead' | 'unknown'
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'
export interface CharacterResponse {
	info: {
		count: number
		pages: number
	}
	results: Character[]
}
