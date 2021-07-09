interface InputExerciseValues {
	trainingArr: Array<number>;
	target: number;
}

const parseExerciseArguments = (args: Array<string>): InputExerciseValues => {
	// eslint-disable-next-line prefer-const
	let trainingArr = [];

	if (args.length < 4) throw new Error('Not enough arguments');
	for (let i = 2; i < args.length; i++) {
		if (!isNaN(Number(args[i]))) {
			trainingArr.push(Number(args[i]));
		} else {
			throw new Error(`${args[i]} were not a numbers`);
		}
	}

	const target = Number(trainingArr.shift());
	return {
		trainingArr,
		target,
	};
};

const exerciseCalculator = (trainingArr: Array<number>, targetHour: number) => {
	const periodLength = trainingArr.length;
	const trainingDays = trainingArr.filter((hours) => hours !== 0).length;
	const target = targetHour;

	const average = trainingArr.reduce((a, b) => a + b) / periodLength;
	const averageOverTarget = average / target;
	const success = averageOverTarget >= 1 ? true : false;

	let rating;
	let ratingDescription;
	if (averageOverTarget >= 1) {
		rating = 3;
		ratingDescription = 'Good job';
	} else if (averageOverTarget < 1 && averageOverTarget >= 0.5) {
		rating = 2;
		ratingDescription = 'Not too bad';
	} else {
		rating = 1;
		ratingDescription = 'You moron';
	}
	console.log({
		periodLength,
		trainingDays,
		success,
		rating,
		ratingDescription,
		target,
		average,
	});
};

try {
	const { trainingArr, target } = parseExerciseArguments(process.argv);
	exerciseCalculator(trainingArr, target);
} catch (error) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	console.log(`Error: ${error.message}`);
}
