import { useEffect, useState } from 'react';
import { ContestantType, Hero, Starship } from '../types/types';

const isStarshipsDuel = (contestantType: string) => contestantType === 'starships';

const mapContestant = (type: ContestantType, data: any) =>
// @ts-ignore
	data.map(d => {
		const starship = {
			name: d.name,
			crew: d.crew === 'unknown' ? 'unknown' : +d.crew,
		} as Starship;

		const hero = {
			name: d.name,
			mass: d.mass === 'unknown' ? 'unknown' : +d.mass,
		} as Hero;

		return isStarshipsDuel(type) ? starship : hero;
	});

const getContestants = async (type: ContestantType) => {
	const contestantType = type === 'heroes' ? 'people' : 'starships';

	try {
		let response = await fetch('https://swapi.co/api/' + contestantType);
		let results = await response.json();

		let contestants = mapContestant(type, results.results);

		while (results.next) {
			response = await fetch(results.next);
			results = (await response.json()) as { results: Hero[] | Starship[] };

			contestants = [...contestants, ...mapContestant(type, results.results)] as Hero[] | Starship[];
		}
		return contestants;
	} catch (e) {
		console.error(e);
	}
};

const useContestants = (contestantType: ContestantType) => {
	const [contestants, setContestants] = useState<Hero[] | Starship[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getContestants(contestantType)
			.then((res: any) => setContestants(res))
			.catch()
			.finally(() => setLoading(false));
	}, [contestantType]);

	return [contestants, loading];
};

export default useContestants;
