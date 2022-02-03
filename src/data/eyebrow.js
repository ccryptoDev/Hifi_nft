const EYEBROW_NAME = [
	{
		name: 'Rainbow Monkey Eyebrows',
		filename: '0',
		weight: 2,
		point: 1
	},
	{
		name: 'Retro Plumber Eyebrows',
		filename: '1',
		weight: 2,
		point: 2
	},
	{
		name: 'Cyber Fiver Eyebrows',
		filename: '2',
		weight: 2,
		point: 3
	},
	{
		name: 'MetroFi Eyebrows',
		filename: '3',
		weight: 2,
		point: 4
	},
	{
		name: 'Appocalypto Eyebrows',
		filename: '4',
		weight: 2,
		point: 5
	},
	{
		name: 'Retro Arcade Eyebrows',
		filename: '5',
		weight: 2,
		point: 6
	},
	{
		name: 'Monkey Eyebrows',
		filename: '6',
		weight: 2,
		point: 7
	},
	{
		name: 'Retro Punk Eyebrows',
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: 'Piercing Eyebrows',
		filename: '8',
		weight: 4,
		point: 10
	},
	{
		name: 'Sad Eyebrows',
		filename: '9',
		weight: 6,
		point: 25
	},
	{
		name: 'Angry Eyebrows',
		filename: '10',
		weight: 10,
		point: 100
	},
	{
		name: 'Up and Down Eyebrows',
		filename: '11',
		weight: 28,
		point: 250
	},
	{
		name: 'Default Eyebrows',
		filename: '12',
		weight: 36,
		point: 500
	},
]

const EYEBROW_WEIGHT = [2,	2,	2,	2,	2,	2,	2,	2,	4,	6,	10,	28,	36]

const EYEBROW_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0],
	[3,	3,	3,	0,	0,	0,	0,	0,	7,	7,	2,	0,	0],
	[2,	2,	2,	0,	0,	0,	0,	0,	5,	6,	20,	30,	0],
	[1,	1,	1,	0,	0,	0,	0,	0,	3,	4,	30,	50,	60],
	[0,	0,	0,	0,	0,	0,	0,	0,	3,	6,	61,	90,	90],
	[0,	0,	0,	0,	0,	0,	0,	0,	1,	17,	52,	180,	250],
	[7,	7,	7,	1,	1,	1,	1,	1,	19,	40,	165,	350,	400],
]

module.exports = { EYEBROW_BY_LEVEL, EYEBROW_NAME, EYEBROW_WEIGHT };