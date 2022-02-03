const VEST_NAME = [
	{
		name: "Rainbow Monkey Vest",
		filename: '0',
		weight: 1,
		point: 1
	},
	{
		name: "Retro plumber vest",
		filename: '1',
		weight: 2,
		point: 2
	},
	{
		name: "Cyber Fiver vest",
		filename: '2',
		weight: 1,
		point: 3
	},
	{
		name: "MetroFi vest",
		filename: '3',
		weight: 1,
		point: 4
	},
	{
		name: "Appocalypto vest",
		filename: '4',
		weight: 2,
		point: 5
	},
	{
		name: "Retro Arcade vest",
		filename: '5',
		weight: 2,
		point: 6
	},
	{
		name: "Monkey vest",
		filename: '6',
		weight: 2,
		point: 7
	},
	{
		name: "Retro Punk vest",
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: "HiFi 80_s vest",
		filename: '8',
		weight: 5,
		point: 10
	},
	{
		name: "HiFi Colorful vest",
		filename: '9',
		weight: 4,
		point: 10
	},
	{
		name: "80_s vest V2",
		filename: '10',
		weight: 6,
		point: 15
	},
	{
		name: "HiFi vest V7",
		filename: '11',
		weight: 7,
		point: 15
	},
	{
		name: "HiFi verse vest",
		filename: '12',
		weight: 7,
		point: 100
	},
	{
		name: "80_s patern vest",
		filename: '13',
		weight: 8,
		point: 100
	},
	{
		name: "Pink HiFi vest",
		filename: '14',
		weight: 8,
		point: 250
	},
	{
		name: "HiFi vest V8",
		filename: '15',
		weight: 9,
		point: 250
	},
	{
		name: "HiFi vest",
		filename: '16',
		weight: 10,
		point: 250
	},
	{
		name: "Default HiFi vest",
		filename: '17',
		weight: 11,
		point: 500
	},
	{
		name: "HiFi vest V3",
		filename: '18',
		weight: 12,
		point: 500
	},
]

const VEST_WEIGHT = [1,	2,	1,	1,	2,	2,	2,	2,	5,	4,	6,	7,	7,	8,	8,	9,	10,	11,	12]

const VEST_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	2,	2,	2,	2,	2,	2,	2,	2,	4,	4,	0,	0,	0,	0,	0,	0,	0],
	[0,	2,	2,	3,	2,	2,	3,	3,	7,	7,	10,	9,	5,	5,	2,	2,	1,	1,	1],
	[0,	1,	1,	1,	1,	1,	1,	1,	4,	4,	10,	12,	23,	28,	28,	28,	2,	2,	2],
	[0,	0,	0,	1,	0,	0,	1,	0,	2,	2,	7,	7,	25,	25,	30,	30,	40,	40,	40],
	[0,	0,	0,	0,	0,	0,	0,	1,	2,	2,	23,	23,	54,	55,	60,	60,	60,	80,	80],
	[1,	5,	6,	8,	6,	6,	8,	8,	17,	17,	54,	55,	107,	113,	120,	120,	103,	123,	123]
]

module.exports = { VEST_BY_LEVEL, VEST_NAME, VEST_WEIGHT };