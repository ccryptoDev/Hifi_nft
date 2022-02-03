const JOYSTICK_NAME = [
	{
		name: "Rainbow Monkey Joystick",
		filename: '0',
		weight: 1,
		point: 1
	},
	{
		name: "Retro plumber Joystick",
		filename: '2',
		weight: 2,
		point: 2
	},
	{
		name: "Cyber Fiver Joystick",
		filename: '3',
		weight: 2,
		point: 3
	},
	{
		name: "MetroFi Joystick",
		filename: '4',
		weight: 2,
		point: 4
	},
	{
		name: "Appocalypto Joystick",
		filename: '5',
		weight: 2,
		point: 5
	},
	{
		name: "Retro Arcade Joystick",
		filename: '6',
		weight: 2,
		point: 6
	},
	{
		name: "Monkey Joystick",
		filename: '1',
		weight: 1,
		point: 7
	},
	{
		name: "Retro Punk Joystick",
		filename: '7',
		weight: 2,
		point: 8
	},
	{
		name: "Spike Ball Joystick",
		filename: '8',
		weight: 4,
		point: 10
	},
	{
		name: "Galaxy Joystick",
		filename: '9',
		weight: 4,
		point: 10
	},
	{
		name: "Lightsaber Joystick",
		filename: '10',
		weight: 7,
		point: 15
	},
	{
		name: "HiFi Retro Wave Joystick",
		filename: '11',
		weight: 8,
		point: 15
	},
	{
		name: "HiFi Ball Joystick",
		filename: '12',
		weight: 12,
		point: 100
	},
	{
		name: "Marble Joystick",
		filename: '13',
		weight: 14,
		point: 100
	},
	{
		name: "Purple Joystick",
		filename: '14',
		weight: 17,
		point: 250
	},
	{
		name: "Default Joystick",
		filename: '15',
		weight: 20,
		point: 500
	},
]

const JOYSTICK_WEIGHT = [1,	2,	2,	2,	2,	2,	1,	2,	4,	4,	7,	8,	12,	14,	17,	20]

const JOYSTICK_BY_LEVEL = [
	[1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0],
	[0,	3,	3,	3,	3,	3,	3,	3,	2,	2,	0,	0,	0,	0,	0,	0],
	[0,	2,	2,	2,	2,	2,	2,	2,	7,	6,	10,	10,	10,	10,	0,	0],
	[0,	1,	1,	1,	1,	1,	1,	1,	12,	10,	23,	23,	30,	30,	15,	0],
	[0,	0,	0,	1,	1,	0,	0,	1,	10,	7,	20,	20,	35,	35,	60,	60],
	[0,	0,	0,	1,	0,	0,	1,	0,	8,	8,	30,	30,	70,	80,	122,	150],
	[1,	7,	7,	9,	8,	7,	8,	8,	39,	33,	83,	83,	145,	155,	197,	210],
]

module.exports = { JOYSTICK_BY_LEVEL, JOYSTICK_NAME, JOYSTICK_WEIGHT };