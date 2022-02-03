const MOUSE_NAME = [
	{
		name: 'Rainbow Monkey Mouth',
		filename: '0',
		weight: 2,
		point: 1
	},
	{
		name: 'Retro Plumber Mouth',
		filename: '1',
		weight: 2,
		point: 2
	},
	{
		name: 'CyberFiver Mouth',
		filename: '2',
		weight: 2,
		point: 3
	},
	{
		name: 'MetroFi Mouth',
		filename: '3',
		weight: 2,
		point: 4
	},
	{
		name: 'Appocalypto Mouth',
		filename: '4',
		weight: 2,
		point: 5
	},
	{
		name: 'Retro Arcade Mouth',
		filename: '5',
		weight: 2,
		point: 6
	},
	{
		name: 'Monkey Mouth',
		filename: '6',
		weight: 2,
		point: 7
	},
	{
		name: 'Retro Punk Mouth',
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: 'CyberFiver Mouth V2',
		filename: '8',
		weight: 3,
		point: 10
	},
	{
		name: 'HiFiCyborg Mouth',
		filename: '9',
		weight: 3,
		point: 10
	},
	{
		name: 'FaceMask',
		filename: '10',
		weight: 4,
		point: 25
	},
	{
		name: 'Mouth V5',
		filename: '11',
		weight: 4,
		point: 25
	},
	{
		name: 'Neon Mouth',
		filename: '12',
		weight: 6,
		point: 100
	},
	{
		name: 'Mouth V4',
		filename: '13',
		weight: 9,
		point: 250
	},
	{
		name: 'Mouth V3',
		filename: '14',
		weight: 11,
		point: 250
	},
	{
		name: 'Mouth V2',
		filename: '15',
		weight: 20,
		point: 250
	},
	{
		name: 'Default Mouth',
		filename: '16',
		weight: 24,
		point: 500
	},
]

const MOUSE_WEIGHT = [2,	2,	2,	2,	2,	2,	2,	2,	3,	3,	4,	4,	6,	9,	11,	20,	24]

const MOUSE_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	10,	7,	5,	3,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	6,	8,	10,	15,	20,	8,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	3,	7,	5,	10,	15,	20,	25,	30,	35],
	[0,	0,	0,	0,	0,	0,	0,	0,	1,	2,	5,	10,	20,	32,	50,	60,	70],
	[0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	2,	5,	13,	45,	74,	159,	200],
	[1,	1,	1,	1,	1,	1,	1,	1,	21,	25,	27,	43,	68,	105,	149,	249,	305],
]

module.exports = { MOUSE_BY_LEVEL, MOUSE_NAME, MOUSE_WEIGHT };