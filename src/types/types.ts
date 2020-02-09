export interface DuelProps {
	type: ContestantType;
}

export enum ContestantType {
	STARSHIPS = 'starships',
	HEROES = 'heroes',
}

export enum DuelUnit {
	CREW = 'crew',
	MASS = 'mass',
}

export interface Contestant {
	name: string;
}

export interface Hero extends Contestant {
	[DuelUnit.MASS]: number | string;
}

export interface Starship extends Contestant {
	[DuelUnit.CREW]: number | string;
}
