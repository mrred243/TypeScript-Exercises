interface InputValues {
	height: number;
	weight: number;
}

export const parseArguments = (args1: string, args2: string): InputValues => {
	if (!isNaN(Number(args1)) && !isNaN(Number(args2))) {
		return {
			height: Number(args1),
			weight: Number(args2),
		};
	} else {
		throw new Error('Provided values were not a numbers');
	}
};

export const bmiCal = (height: number, weight: number) => {
	const bmi = (weight * 10000) / (height * height);
	if (bmi > 25) {
		return `Overweight: ${height} ${weight}`;
	} else if (bmi < 18.5) {
		return `Underweight: ${height} ${weight}`;
	} else {
		return `Normal: ${height} ${weight}`;
	}
};
