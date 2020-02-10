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
	[DuelUnit.MASS]?: number | string;
	[DuelUnit.CREW]?: number | string;
}
