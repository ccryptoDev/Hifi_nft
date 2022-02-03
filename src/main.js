const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");
const { layersOrder, format, rarity } = require("./config.js");
const { generateMetadata } = require('./generate.js');
const gifler = require('./lib/gifler.js');

const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");

if (!process.env.PWD || process.env.PWD == '/') {
  process.env.PWD = process.cwd();
}
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");

const ffmpeg = require("fluent-ffmpeg")()
	.setFfprobePath(ffprobe.path)
	.setFfmpegPath(ffmpegInstaller.path);

  console.log(ffmpegInstaller.path);
  console.log(ffprobe.path);

const imageDir = `${process.env.PWD}/images`;
const dataDir = `${process.env.PWD}/metadata`;
const pinataApiKey = process.env.PINATAAPIKEY;
const pinataSecretApiKey =
  process.env.PINATASECRETAPIKEY;
const metDataFile = "_metadata.json";
const layersDir = `${process.env.PWD}/assets/`;
const imageUri = "https://gateway.pinata.cloud/ipfs/";

// let metadata = [];
let { metadata } = require('../result.js')
let { randData } = require('../randData.js')
let { randomee } = require('../randomee.js')

let hashdata = [];
let attributes = [];
let hash = [];
let decodedHash = [];

const  build = async () => {
	// var metadata = generateMetadata();

	// for(let i=0; i<100; i++) {
		let i = 99
		let bgPath = `${layersDir}${layersOrder[0].name}/${metadata[i][layersOrder[0].name]['filename']}.gif`;
		let options = [
			`-ss 1`,
			`-i ${bgPath}`,
		]
		for(let j=1; j<layersOrder.length; j++) {
			try {
				let filepath = `${layersDir}${layersOrder[j].name}/${metadata[i][layersOrder[j].name]['filename']}.png`;
				if(layersOrder[j].name === 'ambient_light') {
					filepath = `${layersDir}${layersOrder[j].name}/light.png`;
				}
				options.push(`-i ${filepath}`);
			} catch(e) {
				console.log('error metadata', metadata[i][layersOrder[j].name]['name'], layersOrder[j].name);
			}
		}
		options.push(
			// `-filter_complex [0:v][1:v]scale=2000:750,overlay=0:0`,
			`-filter_complex [1]scale=750:-1[img1];[0][img1]overlay=0:0[v1];[2]scale=750:-1[img2];[v1][img2]overlay=0:0[v2];[3]scale=750:-1[img3];[v2][img3]overlay=0:0[v3];[4]scale=750:-1[img4];[v3][img4]overlay=0:0[v4];[5]scale=750:-1[img5];[v4][img5]overlay=0:0[v5];[6]scale=750:-1[img6];[v5][img6]overlay=0:0[v6];[7]scale=750:-1[img7];[v6][img7]overlay=0:0[v7];[8]scale=750:-1[img8];[v7][img8]overlay=0:0[v8];[9]scale=750:-1[img9];[v8][img9]overlay=0:0[v9];[10]scale=750:-1[img10];[v9][img10]overlay=0:0[v10];[11]scale=750:-1[img11];[v10][img11]overlay=0:0[v11]`,
		);
		options.push(
			'-map [v11]'
		);
		options.push(
			'-f gif'
		);
		
    ffmpeg
      .withOptions(options)
      .noAudio()
      .output(`${imageDir}/${i}.gif`)
      .on('start', cmdLine => {
        console.log(`Started FFMpeg`, cmdLine);
      })
      .on('end', () => {
        console.log(`Success!.`);
      })
      .on('error', (err, stdout, stderr) => {
        console.log(` Error:`, err.message);
        console.error('stdout:', stdout);
        console.error('stderr:', stderr);
      })
      .run();
	// }

	// for(let i=0; i<1000; i++) {
	// 	for(let j=0; j<layersOrder.length; j++) {
	// 		try {
	// 			// const filepath = `${layersDir}${layersOrder[j].name}/${metadata[i][layersOrder[j].name]['name']}.png`;
	// 			const image = await loadImage(`${layersDir}${layersOrder[j].name}/${metadata[i][layersOrder[j].name]['name']}.png`);
	
	// 			ctx.drawImage(
	// 			  image,
	// 			  0,
	// 			  0,
	// 			  750,
	// 			  750
	// 			);
	// 		} catch(e) {
	// 			console.log('error metadata', metadata[i][layersOrder[j].name]['name'], layersOrder[j].name);
	// 		}
	// 	}
	// 	saveLayer(canvas, i);
	// 	ctx.clearRect(0, 0, 750, 750);
	// }
}

const makeApesData = (i) => {
  let item = {};

  item.index = i;
  item.name = randomee[i].name;
  item.randNum = randomee[i].randNum;
  item.image = `https://gateway.pinata.cloud/ipfs/QmVsiTX927j76bRrRRZM95Q4YP6KrdKGsHHBZQwNFed3u4/${i}.png`;
  if(i < 100) {
    item.gif = `https://gateway.pinata.cloud/ipfs/QmPRHt1ruio81FxoSoWqw3WubCnWHRYkF9UhmokVHoohGu/${i}.gif`;
  } else {
    item.gif = ''
  }
  item.uri = `/${i}`
  item.attributes = {
    "ambient_light": randomee[i].ambient_light.name,
    "arcade": randomee[i].arcade.name,
    "eye": randomee[i].eye.name,
    "eyebrow": randomee[i].eyebrow.name,
    "glove": randomee[i].glove.name,
    "hair": randomee[i].hair.name,
    "joystick": randomee[i].joystick.name,
    "mouth": randomee[i].mouth.name,
    "skin": randomee[i].skin.name,
    "vest": randomee[i].vest.name,
    "rank": randomee[i].rank,
    "light": randomee[i].light.name,
    "background": randomee[i].background.name
  }

  return item
}

const makeTestData = (i) => {
  let item = {};

  item.name = "name_" + i;
  item.description = "description_" + i;
  item.image = "https://ipfs.io/ipfs/Qma3rj6d8MV94ifHYtxxAdESUU5aHH4YCnhVmhjyHqBYXM";
  item.webm_url = "ipfs://image.webm";
  item.attributes = {
    "id": i 
  }

  return item
}

// const makeApesData = (i) => {
//   let item = {};

//   item.index = i;
//   item.name = metadata[i].name;
//   item.image = `https://gateway.pinata.cloud/ipfs/QmVsiTX927j76bRrRRZM95Q4YP6KrdKGsHHBZQwNFed3u4/${i}.png`
//   item.uri = `/${i}`
//   item.attributes = {
//     "ambient_light": metadata[i].ambient_light.name,
//     "arcade": metadata[i].arcade.name,
//     "eye": metadata[i].eye.name,
//     "eyebrow": metadata[i].eyebrow.name,
//     "glove": metadata[i].glove.name,
//     "hair": metadata[i].hair.name,
//     "joystick": metadata[i].joystick.name,
//     "mouth": metadata[i].mouth.name,
//     "skin": metadata[i].skin.name,
//     "vest": metadata[i].vest.name,
//     "rank": metadata[i].rank,
//     "light": metadata[i].light.name,
//     "background": metadata[i].background.name
//   }

//   return item
// }

const arrageRandData = () => {
  let randArr = [];
  for(let i=0; i<1000; i++) {
    item = {};
    item = metadata[i];
    item.randNum = randData[i].randomNumber;
    
    randArr.push(item);
  }

  randArr.sort(function(a,b) {
    return a.randNum - b.randNum
  })

  return randArr;
}

const getBgNames = () => {
  let bgNames = []

  for(let i=0; i<metadata.length; i++) {
    let bgName = metadata[i].background.name
		if(bgNames.includes(bgName))
			continue;

		bgNames.push(bgName)
  }

  return bgNames
}

const checkDuplicatedRand = () => {
  let duplicatedRand = []
  for(let i=0; i<randData.length-1; i++) {
    for (let j=i+1; j<randData.length; j++) {
      if(randData[i].randomNumber == randData[j].randomNumber) {
        duplicatedRand.push({
          tokenID: randData[i].tokenId,
          randNum: randData[i].randomNumber
        })
      }
    }
  }
  return duplicatedRand;
}

const checkDuplicated = () => {
  let duplicatedNum = []
  let clean = []
  for(let i=0; i<metadata.length-1; i++) {
    for (let j=i+1; j<metadata.length; j++) {
      if(metadata[i].rank == metadata[j].rank) {
        duplicatedNum.push({
          id_1: i,
          id_2: j,
          rank: metadata[i].rank
        })
      }
    }
  }
  // clean = duplicatedNum.filter((obj, pos, arr) => {
  //   return arr
  //     .map(mapObj => mapObj.rank)
  //     .indexOf(obj.rank) == pos;
  // });
  // return clean
  return duplicatedNum
}

const addRarity = (_str) => {
  let itemRarity;

  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });

  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        rarity: addRarity(i),
      };
    });
};

const layersSetup = (layersOrder) => {
  const layers = layersOrder.map((layerObj, index) => ({
    id: index,
    name: layerObj.name,
    location: `${layersDir}/${layerObj.name}/`,
    elements: getElements(`${layersDir}/${layerObj.name}/`),
    position: { x: 0, y: 0 },
    size: { width: format.width, height: format.height },
    number: layerObj.number,
  }));

  return layers;
};

const buildSetup = () => {
  if (fs.existsSync(imageDir)) {
    fs.rmdirSync(imageDir, { recursive: true });
  }
  fs.mkdirSync(imageDir);
  if (fs.existsSync(dataDir)) {
    fs.rmdirSync(dataDir, { recursive: true });
  }
  fs.mkdirSync(dataDir);
};

const saveLayer = (_canvas, _edition) => {
  fs.writeFileSync(
    `${imageDir}/${_edition}.png`,
    _canvas.toBuffer("image/png")
  );
};

const addMetadata = (_edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    name: "",
    description: "",
    external_url: "https://ipfs.io",
    hash: hash.join(""),
    decodedHash: decodedHash,
    edition: _edition,
    date: dateTime,
    attributes: attributes,
    category: "collectibles",
    image: imageUri + _edition + ".png",
  };
  metadata.push(tempMetadata);
  attributes = [];
  hash = [];
  decodedHash = [];
};

const addAttributes = (_element, _layer) => {
  let _trait = _layer.name.split(" ")[0].toLowerCase();
  let trait = _trait.charAt(0).toUpperCase() + _trait.slice(1);
  let tempAttr = {
    id: _element.id,
    trait: trait,
    value: _element.name,
    rarity: _element.rarity,
  };
  attributes.push(tempAttr);
  hash.push(_layer.id);
  hash.push(_element.id);
  decodedHash.push({ [_layer.id]: _element.id });
};

const drawLayer = async (_layer, _edition) => {
  const rand = Math.random();
  let element = _layer.elements[Math.floor(rand * _layer.number)]
    ? _layer.elements[Math.floor(rand * _layer.number)]
    : null;
  if (element) {
    addAttributes(element, _layer);
    const image = await loadImage(`${_layer.location}${element.fileName}`);

    ctx.drawImage(
      image,
      _layer.position.x,
      _layer.position.y,
      _layer.size.width,
      _layer.size.height
    );
    await saveLayer(canvas, _edition);
  }
};

const createFiles = (edition) => {
  const layers = layersSetup(layersOrder);

  for (let i = 1; i <= edition; i++) {
    layers.forEach((layer) => {
      drawLayer(layer, i);
    });
    addMetadata(i);
    console.log("Creating edition " + i);
  }
};

const createMetaData = (edition) => {
  for (let j = 1; j <= edition; j++) {
    let tempMetadata = {
      name: metadata[j - 1].name,
      description: metadata[j - 1].description,
      hash: metadata[j - 1].hash,
      decodedHash: metadata[j - 1].decodedHash,
      edition: metadata[j - 1].edition,
      date: metadata[j - 1].date,
      attributes: metadata[j - 1].attributes,
      category: metadata[j - 1].category,
      image: imageUri + hashdata[j - 1],
      external_url: metadata[j - 1].external_url,
    };
    fs.stat(`${dataDir}/${j}`, (err) => {
      if (err == null || err.code === "ENOENT") {
        fs.writeFileSync(
          `${dataDir}/${j}`,
          JSON.stringify(tempMetadata, null, 2)
        );
      } else {
        console.log("Oh no, error: ", err.code);
      }
    });
  }
};
const uploadImages = async (edition) => {
  for (let j = 1; j <= edition; j++) {
    await pinFileToIPFS(j);
  }
};
const pinFileToIPFS = (index) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  //we gather a local file from the API for this example, but you can gather the file from anywhere
  let data = new FormData();
  data.append("file", fs.createReadStream(`./images/${index}.png`));
  // data.why append('file', fs.createReadStream(`./src/preview.png`));

  return axios
    .post(url, data, {
      maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large files
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    })
    .then(function (response) {
      console.log(response.data.IpfsHash);
      hashdata.push(response.data.IpfsHash);
      //handle response here
    })
    .catch(function (error) {
      console.log(error);
      //handle error here
    });
};

module.exports = {
  buildSetup,
  createFiles,
  createMetaData,
  pinFileToIPFS,
  uploadImages,
  build,
  checkDuplicated,
  getBgNames,
  makeApesData,
  arrageRandData,
  checkDuplicatedRand,
  makeTestData
};
