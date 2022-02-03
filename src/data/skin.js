const SKIN_NAME = [
	{
		name: 'Rainbow Monkey Skin',
		filename: '0',
		weight: 1,
		point: 1
	},
	{
		name: 'Retro Plumber Skin',
		filename: '1',
		weight: 2,
		point: 2
	},
	{
		name: 'CyberFiver Skin',
		filename: '2',
		weight: 1,
		point: 3
	},
	{
		name: 'MetroFi Skin',
		filename: '3',
		weight: 1,
		point: 4
	},
	{
		name: 'Apocalypto Skin',
		filename: '4',
		weight: 1,
		point: 5
	},
	{
		name: 'RetroArcade Skin',
		filename: '5',
		weight: 1,
		point: 6
	},
	{
		name: 'Monkey Skin',
		filename: '6',
		weight: 1,
		point: 7
	},
	{
		name: 'RetroPunk Skin',
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: 'Robot Skin',
		filename: '8',
		weight: 5,
		point: 5
	},
	{
		name: 'Zombie Skin',
		filename: '9',
		weight: 5,
		point: 25
	},
	{
		name: 'Alien SKin V3',
		filename: '10',
		weight: 3,
		point: 100
	},
	{
		name: 'Alien Skin',
		filename: '11',
		weight: 3,
		point: 250
	},
	{
		name: 'Alien Skin V2',
		filename: '12',
		weight: 3,
		point: 250
	},
	{
		name: 'Default Skin V1',
		filename: '13',
		weight: 32,
		point: 500
	},
	{
		name: 'Default Skin V2',
		filename: '14',
		weight: 39,
		point: 500
	},
]

const SKIN_WEIGHT = [1,	2,	1,	1,	1,	1,	1,	2,	5,	5,	3,	3,	3,	32,	39]

const SKIN_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	1,	0,	1,	1,	0,	1,	8,	7,	5,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	12,	17,	16,	13,	9,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	10,	20,	45,	40,	35,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	0,	2,	14,	20,	40,	42,	57,	75],
	[0,	0,	0,	0,	0,	0,	0,	0,	2,	13,	25,	80,	80,	150,	150],
	[1,	2,	2,	1,	2,	2,	1,	2,	34,	71,	111,	173,	166,	207,	225],
]

module.exports = { SKIN_BY_LEVEL, SKIN_NAME, SKIN_WEIGHT };