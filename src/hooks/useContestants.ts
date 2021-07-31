import { useEffect, useState } from 'react';
import { Contestant, ContestantType } from '../types/types';

const isStarshipsDuel = (contestantType: string) => contestantType === 'starships';

const mapContestant = (type: ContestantType, data: Contestant[]) =>
	data
		.filter(d => d.crew !== 'unknown' && d.mass !== 'unknown')
		.map((d: Contestant) => {
			const starship = {
				name: d.name,
				crew: d.crew && +d.crew,
			};
			const hero = {
				name: d.name,
				mass: d.mass && +d.mass,
			};

			return isStarshipsDuel(type) ? starship : hero;
		});

const getContestants = async (type: ContestantType) => {
	const contestantType = type === 'heroes' ? 'people' : 'starships';

	try {
		let response = await fetch('https://swapi.dev/api/' + contestantType);
		let results = await response.json();

		let contestants: Contestant[] = mapContestant(type, results.results);

		while (results.next) {
			response = await fetch(results.next);
			results = (await response.json()) as { results: Contestant[] };

			contestants = [...contestants, ...mapContestant(type, results.results)] as Contestant[];
		}
		return contestants;
	} catch (e) {
		console.error(e);
	}
};

const useContestants = (contestantType: ContestantType) => {
	const [contestants, setContestants] = useState<Contestant[]>([]);
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
