const ARCADE_NAME = [
  {
    name: "Rainbow Monkey Arcade",
    filename: "0",
    weight: 1,
    point: 1,
  },
  {
    name: "Retro plumber Arcade",
    filename: "1",
    weight: 2,
    point: 2,
  },
  {
    name: "Cyber Fiver Arcade",
    filename: "2",
    weight: 2,
    point: 3,
  },
  {
    name: "MetroFi Arcade",
    filename: "3",
    weight: 2,
    point: 4,
  },
  {
    name: "Appocalypto Arcade",
    filename: "4",
    weight: 2,
    point: 5,
  },
  {
    name: "Retro Arcade Arcade",
    filename: "5",
    weight: 2,
    point: 6,
  },
  {
    name: "Monkey Arcade",
    filename: "6",
    weight: 1,
    point: 7,
  },
  {
    name: "Retro Punk Arcade",
    filename: "7",
    weight: 2,
    point: 8,
  },
  {
    name: "CyberFiver V2 Arcade",
    filename: "8",
    weight: 4,
    point: 10,
  },
  {
    name: "Purple Neon Arcade",
    filename: "9",
    weight: 6,
    point: 10,
  },
  {
    name: "80_s Arcade",
    filename: "10",
    weight: 7,
    point: 15,
  },
  {
    name: "Pink Neon Arcade",
    filename: "11",
    weight: 10,
    point: 15,
  },
  {
    name: "80_s V2 Arcade",
    filename: "12",
    weight: 11,
    point: 100,
  },
  {
    name: "Red Neon Arcade",
    filename: "13",
    weight: 12,
    point: 250,
  },
  {
    name: "80_s Petern Arcade",
    filename: "10",
    weight: 15,
    point: 250,
  },
  {
    name: "Default Arcade",
    filename: "15",
    weight: 21,
    point: 500,
  },
];

const ARCADE_WEIGHT = [1, 2, 2, 2, 2, 2, 1, 2, 4, 6, 7, 10, 11, 12, 15, 21];

const ARCADE_BY_LEVEL = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 5, 6, 9, 9, 9, 8, 7, 7],
  [0, 1, 1, 1, 1, 1, 1, 1, 10, 10, 20, 20, 29, 18, 18, 18],
  [0, 1, 0, 1, 0, 1, 0, 1, 17, 17, 32, 30, 30, 40, 40, 40],
  [0, 0, 1, 0, 1, 0, 1, 0, 10, 10, 60, 60, 70, 95, 97, 95],
  [1, 6, 6, 6, 6, 6, 6, 6, 45, 46, 123, 121, 139, 161, 162, 160],
];

module.exports = { ARCADE_BY_LEVEL, ARCADE_NAME, ARCADE_WEIGHT };
