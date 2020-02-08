import { starshipsMock } from '../mocks/starships-mock';
import { getRandomNumber } from '../helpers/getRandomNumber';
import { heroesMock } from '../mocks/heroes-mock';
import starship1 from '../images/millennium-falcon-011.jpg';
import hero1 from '../images/stormtrooper.png';
import starship2 from '../images/starship3.png';
import hero2 from '../images/mandalorian.png';

interface Hero {
	name: string;
	mass: string;
}

interface Starship {
	name: string;
	crew: string;
}

function isStarshipsDuel(contestantType: string): boolean {
	return contestantType === 'starships';
}

function getRandomContestant(contestantType: string): Hero | Starship {
	const randomStarshipsNumber = getRandomNumber(starshipsMock.results.length);
	const randomHeroesNumber = getRandomNumber(heroesMock.results.length);

	return isStarshipsDuel(contestantType)
		? {
				name: starshipsMock.results[randomStarshipsNumber].name,
				crew: starshipsMock.results[randomStarshipsNumber].crew,
		  }
		: {
				name: heroesMock.results[randomHeroesNumber].name,
				mass: heroesMock.results[randomHeroesNumber].mass,
		  };
}

const useContestants: any = (contestantType: string) => {
	const fightUnit = isStarshipsDuel(contestantType) ? 'crew' : 'mass';
	const contestant1 = {
		...getRandomContestant(contestantType),
		img: isStarshipsDuel(contestantType) ? starship1 : hero1,
	};
	let contestant2 = {
		...getRandomContestant(contestantType),
		img: isStarshipsDuel(contestantType) ? starship2 : hero2,
	};

	if (contestant1.name === contestant2.name) {
		contestant2 = { ...contestant2, ...getRandomContestant(contestantType) };
	}

	return { contestant1, contestant2, fightUnit };
};

export default useContestants;
