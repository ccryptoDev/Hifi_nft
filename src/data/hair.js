const HAIR_NAME = [
	{
		name: 'Rainbow Monkey Mask',
		filename: '0',
		weight: 1,
		point: 1
	},
	{
		name: 'Retro plumber hat',
		filename: '1',
		weight: 1,
		point: 2
	},
	{
		name: 'Cyber Fiver VR Goggles',
		filename: '2',
		weight: 1,
		point: 3
	},
	{
		name: 'MetroFi Helmet',
		filename: '3',
		weight: 1,
		point: 4
	},
	{
		name: 'Appocalypto Helmet',
		filename: '4',
		weight: 1,
		point: 5
	},
	{
		name: 'Retro Arcade Hat',
		filename: '5',
		weight: 1,
		point: 6
	},
	{
		name: 'Monkey helmet',
		filename: '6',
		weight: 1,
		point: 7
	},
	{
		name: 'Retro Punk Hair',
		filename: '7',
		weight: 1,
		point: 8
	},
	{
		name: 'MetroFi V2 Helmet',
		filename: '8',
		weight: 3,
		point: 10
	},
	{
		name: 'Green Afro hair',
		filename: '9',
		weight: 3,
		point: 10
	},
	{
		name: 'Clown Afro Hair',
		filename: '10',
		weight: 3,
		point: 10
	},
	{
		name: 'Green Multi Color Hair',
		filename: '11',
		weight: 4,
		point: 15
	},
	{
		name: 'Red Afro Hair',
		filename: '12',
		weight: 4,
		point: 15
	},
	{
		name: 'HiFi TV',
		filename: '13',
		weight: 4,
		point: 15
	},
	{
		name: 'Red Cyber Punk Long Hair',
		filename: '14',
		weight: 5,
		point: 100
	},
	{
		name: 'Pink Multi Color Hair',
		filename: '15',
		weight: 5,
		point: 100
	},
	{
		name: 'Red Multi Color Short Afro',
		filename: '16',
		weight: 5,
		point: 100
	},
	{
		name: 'Red BomFi Helmet',
		filename: '17',
		weight: 5,
		point: 250
	},
	{
		name: 'Green Mid Long Hair',
		filename: '18',
		weight: 6,
		point: 250
	},
	{
		name: 'Blue Cyber Punk Hair',
		filename: '19',
		weight: 6,
		point: 250
	},
	{
		name: 'Blue Hat',
		filename: '20',
		weight: 7,
		point: 250
	},
	{
		name: 'Normal Long Hair',
		filename: '21',
		weight: 8,
		point: 500
	},
	{
		name: 'Normal Mid Long Hair',
		filename: '22',
		weight: 8,
		point: 500
	},
	{
		name: 'Pride Hat',
		filename: '23',
		weight: 8,
		point: 500
	},
	{
		name: 'HiFi Hat',
		filename: '24',
		weight: 8,
		point: 500
	},
]

const HAIR_WEIGHT = [1,	1,	1,	1,	1,	1,	1,	1,	3,	3,	3,	4,	4,	4,	5,	5,	5,	5,	6,	6,	7,	8,	8,	8,	8]

const HAIR_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	2,	2,	2,	2,	2,	2,	2,	3,	3,	2,	1,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	2,	2,	2,	2,	2,	2,	2,	6,	6,	6,	5,	5,	5,	4,	4,	4,	2,	2,	2,	2,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	1,	0,	14,	14,	14,	12,	12,	12,	10,	10,	10,	7,	7,	7,	7,	3,	3,	3,	3],
	[0,	0,	1,	0,	0,	0,	0,	0,	4,	4,	4,	6,	6,	6,	14,	15,	15,	20,	20,	20,	20,	20,	25,	25,	25],
	[0,	0,	0,	0,	1,	0,	0,	0,	1,	1,	1,	15,	15,	15,	25,	25,	25,	35,	35,	36,	37,	57,	56,	60,	60],
	[1,	5,	6,	5,	7,	5,	6,	5,	28,	28,	27,	39,	39,	39,	53,	54,	54,	64,	64,	65,	66,	80,	84,	88,	88],
]

module.exports = { HAIR_BY_LEVEL, HAIR_NAME, HAIR_WEIGHT };