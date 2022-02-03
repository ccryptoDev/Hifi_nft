var { ARCADE_NAME, ARCADE_BY_LEVEL, ARCADE_WEIGHT } = require('./data/arcade.js');
var { BACKGROUND_NAME } = require('./data/background.js');
var { EYE_NAME, EYE_BY_LEVEL, EYE_WEIGHT } = require('./data/eye.js');
var { EYEBROW_NAME, EYEBROW_BY_LEVEL, EYEBROW_WEIGHT } = require('./data/eyebrow.js');
var { GLOVE_NAME, GLOVE_BY_LEVEL, GLOVE_WEIGHT } = require('./data/glove.js');
var { HAIR_NAME, HAIR_BY_LEVEL, HAIR_WEIGHT } = require('./data/hair.js');
var { JOYSTICK_NAME, JOYSTICK_BY_LEVEL, JOYSTICK_WEIGHT } = require('./data/joystick.js');
var { LIGHT_NAME } = require('./data/light.js');
var { MOUSE_NAME, MOUSE_BY_LEVEL, MOUSE_WEIGHT } = require('./data/mouth.js');
var { NAMES } = require('./data/name.js');
var { SKIN_NAME, SKIN_BY_LEVEL, SKIN_WEIGHT } = require('./data/skin.js');
var { VEST_NAME, VEST_BY_LEVEL, VEST_WEIGHT } = require('./data/vest.js');

const generateMetadata = () => {
	let result = [];
	let rankArr = [];
	let i = 0;

	do {
		let item = {}
		let level = 0;

		let arcade, eye, eyebrow, glove, hair, joystick, mouse, skin, vest, background;
		if (i === 0) {
			background = BACKGROUND_NAME[0];
			arcade = ARCADE_NAME[0];
			eye = EYE_NAME[0];
			eyebrow = EYEBROW_NAME[0];
			glove = GLOVE_NAME[0];
			hair = HAIR_NAME[0];
			joystick = JOYSTICK_NAME[0];
			mouse = MOUSE_NAME[0];
			skin = SKIN_NAME[0];
			vest = VEST_NAME[0];
		} else if (i === 1) {
			background = BACKGROUND_NAME[6];
			arcade = ARCADE_NAME[6];
			eye = EYE_NAME[6];
			eyebrow = EYEBROW_NAME[6];
			glove = GLOVE_NAME[6];
			hair = HAIR_NAME[6];
			joystick = JOYSTICK_NAME[6];
			mouse = MOUSE_NAME[6];
			skin = SKIN_NAME[6];
			vest = VEST_NAME[6];
		} else if (i === 2) {
			background = BACKGROUND_NAME[1];
			arcade = ARCADE_NAME[1];
			eye = EYE_NAME[1];
			eyebrow = EYEBROW_NAME[1];
			glove = GLOVE_NAME[1];
			hair = HAIR_NAME[1];
			joystick = JOYSTICK_NAME[1];
			mouse = MOUSE_NAME[1];
			skin = SKIN_NAME[1];
			vest = VEST_NAME[1];
		} else if (i === 3) {
			background = BACKGROUND_NAME[2];
			arcade = ARCADE_NAME[2];
			eye = EYE_NAME[2];
			eyebrow = EYEBROW_NAME[2];
			glove = GLOVE_NAME[2];
			hair = HAIR_NAME[2];
			joystick = JOYSTICK_NAME[2];
			mouse = MOUSE_NAME[2];
			skin = SKIN_NAME[2];
			vest = VEST_NAME[2];
		} else if (i === 4) {
			background = BACKGROUND_NAME[3];
			arcade = ARCADE_NAME[3];
			eye = EYE_NAME[3];
			eyebrow = EYEBROW_NAME[3];
			glove = GLOVE_NAME[3];
			hair = HAIR_NAME[3];
			joystick = JOYSTICK_NAME[3];
			mouse = MOUSE_NAME[3];
			skin = SKIN_NAME[3];
			vest = VEST_NAME[3];
		} else if (i === 5) {
			background = BACKGROUND_NAME[4];
			arcade = ARCADE_NAME[4];
			eye = EYE_NAME[4];
			eyebrow = EYEBROW_NAME[4];
			glove = GLOVE_NAME[4];
			hair = HAIR_NAME[4];
			joystick = JOYSTICK_NAME[4];
			mouse = MOUSE_NAME[4];
			skin = SKIN_NAME[4];
			vest = VEST_NAME[4];
		} else if (i === 6) {
			background = BACKGROUND_NAME[5];
			arcade = ARCADE_NAME[5];
			eye = EYE_NAME[5];
			eyebrow = EYEBROW_NAME[5];
			glove = GLOVE_NAME[5];
			hair = HAIR_NAME[5];
			joystick = JOYSTICK_NAME[5];
			mouse = MOUSE_NAME[5];
			skin = SKIN_NAME[5];
			vest = VEST_NAME[5];
		} else if (i === 7) {
			background = BACKGROUND_NAME[7];
			arcade = ARCADE_NAME[7];
			eye = EYE_NAME[7];
			eyebrow = EYEBROW_NAME[7];
			glove = GLOVE_NAME[7];
			hair = HAIR_NAME[7];
			joystick = JOYSTICK_NAME[7];
			mouse = MOUSE_NAME[7];
			skin = SKIN_NAME[7];
			vest = VEST_NAME[7];
		}

		if (i > 7) {

			let tempIndex = 0;
			// arcade
			tempIndex = random_picker(ARCADE_WEIGHT);
			arcade = ARCADE_NAME[tempIndex];

			// eye
			tempIndex = random_picker(EYE_WEIGHT);
			eye = EYE_NAME[tempIndex];

			// eyebrow
			tempIndex = random_picker(EYEBROW_WEIGHT);
			eyebrow = EYEBROW_NAME[tempIndex];

			// glove
			tempIndex = random_picker(GLOVE_WEIGHT);
			glove = GLOVE_NAME[tempIndex];

			// vest
			tempIndex = random_picker(VEST_WEIGHT);
			vest = VEST_NAME[tempIndex];

			// hair
			tempIndex = random_picker(HAIR_WEIGHT);
			hair = HAIR_NAME[tempIndex];

			// joystick
			tempIndex = random_picker(JOYSTICK_WEIGHT);
			joystick = JOYSTICK_NAME[tempIndex];

			// mouse
			tempIndex = random_picker(MOUSE_WEIGHT);
			mouse = MOUSE_NAME[tempIndex];

			// skin
			tempIndex = random_picker(SKIN_WEIGHT);
			skin = SKIN_NAME[tempIndex];
		}

		item = {
			ambient_light: {
				name: 'light',
				weight: 0,
				point: 0
			},
			// background,
			// light,
			arcade,
			eye,
			eyebrow,
			glove,
			hair,
			joystick,
			mouth: mouse,
			// name: NAMES[i],
			skin,
			vest
		};
		
		let rank = 0
		Object.entries(item).map(([key, each]) => {
			if(key !== 'name') {
				rank += each.point
			}
		})
		if(rankArr.includes(rank))
			continue;

		rankArr.push(rank)
		item.rank = rank
		result.push(item);

		i++;
	} while (i < 1000)

	// sort results by rank
	result.sort((a, b) => a.rank - b.rank)

	// Add background, light, name
	for (let i = 0; i < 1000; i++) {
		let light = LIGHT_NAME[0];
		let background = BACKGROUND_NAME[0];
		if(i < 8) {
			background = BACKGROUND_NAME[i]; 
		} else if (i >= 8 && i < 33) {
			light = LIGHT_NAME[1];
			background = BACKGROUND_NAME[8]
		} else if (i >= 33 && i < 100) {
			light = LIGHT_NAME[2];
			background = BACKGROUND_NAME[9]
		} else if (i >= 100 && i < 250) {
			light = LIGHT_NAME[3]
			background = BACKGROUND_NAME[10]
		} else if (i >= 250 && i < 500) {
			light = LIGHT_NAME[4];
			background = BACKGROUND_NAME[11]
		} else if (i >= 500) {
			light = LIGHT_NAME[5];
			background = BACKGROUND_NAME[12]
		}
		result[i].light = light;
		result[i].background = background
		result[i].name = NAMES[i]
	}

	for (let i = 0; i < result.length - 1; i++) {
		for (let j = i + 1; j < result.length; j++) {
			if (
				result[i].background.name === result[j].background.name &&
				result[i].light.name === result[j].light.name &&
				result[i].arcade.name === result[j].arcade.name &&
				result[i].eye.name === result[j].eye.name &&
				result[i].eyebrow.name === result[j].eyebrow.name &&
				result[i].glove.name === result[j].glove.name &&
				result[i].hair.name === result[j].hair.name &&
				result[i].joystick.name === result[j].joystick.name &&
				result[i].mouth.name === result[j].mouth.name &&
				result[i].skin.name === result[j].skin.name &&
				result[i].vest.name === result[j].vest.name
			) {
				// console.log('there is same entry', i, j);
				break;
			}
		}
	}
	return result;
}

const random_picker = (weightArr) => {
	const WEIGHT_SUM = weightSum(weightArr)
	const rand = Math.floor(Math.random() * WEIGHT_SUM);
  var index = 0;
  var sum = 0;

  do {
    sum += weightArr[index];
  } while(rand > sum && index++ < weightArr.length)

  return index; 
} 

const weightSum = (array) => {
	var total = 0;
  for(let i=0; i<array.length; i++) {
    total += array[i];
  }

  return total;
}

const pickAttributeByRndByLevel = (level, type) => {
	let value_by_name;
	if (type === 'arcade') {
		value_by_name = ARCADE_BY_LEVEL;
	} else if (type === 'eye') {
		value_by_name = EYE_BY_LEVEL;
	} else if (type === 'eyebrow') {
		value_by_name = EYEBROW_BY_LEVEL;
	} else if (type === 'glove') {
		value_by_name = GLOVE_BY_LEVEL;
	} else if (type === 'hair') {
		value_by_name = HAIR_BY_LEVEL;
	} else if (type === 'joystick') {
		value_by_name = JOYSTICK_BY_LEVEL;
	} else if (type === 'mouse') {
		value_by_name = MOUSE_BY_LEVEL;
	} else if (type === 'skin') {
		value_by_name = SKIN_BY_LEVEL;
	} else if (type === 'vest') {
		value_by_name = VEST_BY_LEVEL;
	}

	let resultIndex = 0;
	let length = value_by_name[level].length;
	let rnd = Math.floor(Math.random(length) * length);
	while (true) {
		if (value_by_name[level][rnd] > 0) {
			resultIndex = rnd;
			break;
		}
		rnd = Math.floor(Math.random(length) * length);
	}
	return resultIndex;
}

module.exports = {
	generateMetadata
}