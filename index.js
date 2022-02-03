const myArgs = process.argv.slice(2);
const { buildSetup, createFiles, createMetaData, pinFileToIPFS, uploadImages, build, checkDuplicated, getBgNames, makeApesData, arrageRandData, checkDuplicatedRand, makeTestData } = require("./src/main.js");
const { generateMetadata } = require('./src/generate.js');
const { defaultEdition } = require("./src/config.js");
const edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;
const fs = require("fs");
const ipfsDir = `${process.env.PWD}/IPFS/`;
const pinataDir = `${process.env.PWD}/pinata/`;
const testDir = `${process.env.PWD}/test/`;

(async () => {
	
	// await build();

	// var duplicatedNumber = checkDuplicated()
	// console.log(duplicatedNumber)

	// let metadatas = generateMetadata();
	
	// fs.writeFileSync(
	// 	`result.txt`,
	// 	JSON.stringify(metadatas, null, 2)
	// );

	// let duplicatedRandData = checkDuplicatedRand();
	// console.log(duplicatedRandData)

	// let randData = arrageRandData()
	// fs.writeFileSync(
	// 	`randomee.json`,
	// 	JSON.stringify(randData, null, 2)
	// )

	// for(let i=0; i<1000; i++) {
	// 	let apesData = makeApesData(i)

	// 	fs.writeFileSync(
	// 		`${pinataDir}${apesData.randNum}`,
	// 		JSON.stringify(apesData, null, 2)
	// 	)
	// }

	for(let i=0; i<666; i++) {
		let data = makeTestData(i)

		fs.writeFileSync(
			`${testDir}${i}.json`,
			JSON.stringify(data, null, 2)
		)
	}

  // buildSetup();
  // await createFiles(edition);
  // await uploadImages(edition);
  // await createMetaData(edition);

	// let bgNames = getBgNames();
	// console.log(bgNames)
	
})();
