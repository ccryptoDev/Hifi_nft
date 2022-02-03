const EYE_NAME = [
	{
		name: 'Rainbow Monkey Eyes',
		filename: '0',
		weight: 2,
		point: 1
	},
	{
		name: 'Retro Plumber Eyes',
		filename: '1',
		weight: 2,
		point: 2
	},
	{
		name: 'Cyber Fiver Eyes',
		filename: '2',
		weight: 2,
		point: 3
	},
	{
		name: 'MetroFi Eyes',
		filename: '3',
		weight: 2,
		point: 4
	},
	{
		name: 'Apocalypto Eyes',
		filename: '4',
		weight: 2,
		point: 5
	},
	{
		name: 'Retro Arcade Eyes',
		filename: '5',
		weight: 2,
		point: 6
	},
	{
		name: 'Monkey Eyes',
		filename: '6',
		weight: 2,
		point: 7
	},
	{
		name: 'Retro Punk Eyes',
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: 'Neon Punk Glasses',
		filename: '8',
		weight: 3,
		point: 10
	},
	{
		name: 'HiFi Verse Glasses',
		filename: '9',
		weight: 3,
		point: 10
	},
	{
		name: 'Stoned Eyes',
		filename: '10',
		weight: 4,
		point: 25
	},
	{
		name: 'HiFI Neon Glasses',
		filename: '11',
		weight: 4,
		point: 25
	},
	{
		name: 'HiFi 3D Glasses',
		filename: '12',
		weight: 5,
		point: 100
	},
	{
		name: 'Neon Eyes',
		filename: '13',
		weight: 6,
		point: 100
	},
	{
		name: 'HiFi JM Glasses',
		filename: '14',
		weight: 13,
		point: 250
	},
	{
		name: 'HiFi Sunglasses',
		filename: '15',
		weight: 17,
		point: 250
	},
	{
		name: 'Default eyes',
		filename: '16',
		weight: 29,
		point: 500
	},
]

const EYE_WEIGHT = [2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	4,	4,	5,	6,	13,	17,	29]

const EYE_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	1,	7,	7,	4,	3,	1,	1,	0,	0,	0],
	[1,	1,	0,	0,	0,	0,	0,	0,	6,	6,	15,	14,	8,	8,	4,	4,	0],
	[0,	1,	0,	0,	0,	0,	0,	1,	3,	4,	4,	7,	10,	12,	22,	34,	52],
	[1,	0,	0,	1,	0,	0,	0,	0,	1,	2,	3,	4,	7,	12,	30,	60,	129],
	[0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	3,	5,	10,	50,	75,	155,	200],
	[3,	3,	1,	2,	1,	1,	2,	3,	18,	20,	29,	33,	36,	83,	131,	253,	381],
]

module.exports = { EYE_BY_LEVEL, EYE_NAME, EYE_WEIGHT };