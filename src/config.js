const layersOrder = [
    { name: 'background' },
    { name: 'skin' },
    { name: 'vest' },
    { name: 'arcade' },
    { name: 'glove' },
    { name: 'joystick' },
    { name: 'mouth' },
    { name: 'eyebrow' },
    { name: 'eye' },
    { name: 'hair' },
    { name: 'ambient_light' },
    { name: 'light' },
];
const format = {
    width: 750,
    height: 750
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 30;

module.exports = { layersOrder, format, rarity, defaultEdition };