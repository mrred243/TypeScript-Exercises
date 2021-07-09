import express from 'express';

import { parseArguments, bmiCal } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
	res.send('Hello World');
});

app.get('/bmi', (req, res) => {
	const heightParam = req.query.height;
	const weightParam = req.query.weight;
	if (!heightParam || !weightParam) {
		res.status(400);
		res.send({ error: 'missing parameter height or weight' });
	} else {
		try {
			const { height, weight } = parseArguments(
				String(heightParam),
				String(weightParam),
			);

			const result = bmiCal(height, weight);
			res.send(result);
		} catch (error) {
			res.status(400);
			res.send({ error: error.message });
		}
	}
});

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
