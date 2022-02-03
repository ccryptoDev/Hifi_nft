const GLOVE_NAME = [
	{
		name: 'Rainbow Monkey Gloves',
		filename: '0',
		weight: 1,
		point: 1
	},
	{
		name: 'Retro plumber Gloves',
		filename: '1',
		weight: 1,
		point: 2
	},
	{
		name: 'Cyber Fiver Gloves',
		filename: '2',
		weight: 1,
		point: 3
	},
	{
		name: 'MetroFi Gloves',
		filename: '3',
		weight: 1,
		point: 4
	},
	{
		name: 'Appocalypto Gloves',
		filename: '4',
		weight: 1,
		point: 5
	},
	{
		name: 'Retro Arcade Gloves',
		filename: '5',
		weight: 1,
		point: 6
	},
	{
		name: 'Monkey Gloves',
		filename: '6',
		weight: 1,
		point: 7
	},
	{
		name: 'Retro Punk Gloves',
		filename: '7',
		weight: 1,
		point: 8
	},
	{
		name: 'Robot Hands',
		filename: '8',
		weight: 4,
		point: 10
	},
	{
		name: 'Zombie Hands',
		filename: '9',
		weight: 5,
		point: 15
	},
	{
		name: 'Alien Hands V3',
		filename: '10',
		weight: 6,
		point: 100
	},
	{
		name: 'Alien Hands V2',
		filename: '11',
		weight: 8,
		point: 250
	},
	{
		name: 'Alien Hands',
		filename: '12',
		weight: 8,
		point: 250
	},
	{
		name: 'Default Gloves',
		filename: '13',
		weight: 61,
		point: 500
	},
]

const GLOVE_WEIGHT = [1,	1,	1,	1,	1,	1,	1,	1,	4,	5,	6,	8,	8,	61]

const GLOVE_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0],
	[0,	3,	2,	3,	3,	2,	3,	3,	3,	3,	0,	0,	0,	0],
	[0,	2,	2,	2,	2,	2,	2,	2,	15,	20,	10,	8,	0,	0],
	[0,	1,	2,	2,	1,	1,	1,	1,	15,	18,	40,	30,	23,	15],
	[0,	0,	1,	0,	1,	1,	0,	1,	5,	6,	35,	50,	60,	90],
	[0,	0,	0,	0,	0,	0,	1,	0,	3,	4,	70,	90,	130,	202],
	[1,	7,	8,	8,	8,	7,	8,	8,	41,	51,	155,	178,	213,	307],
]

module.exports = { GLOVE_BY_LEVEL, GLOVE_NAME, GLOVE_WEIGHT };