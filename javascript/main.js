const voisins = require("./voisinage");
const recuit = require("./algoRecuit");
const tabou = require("./algoTabou");
const utils = require("./algo");
const fs = require("fs");
const param = require("./param");


function main(filePath, parametres) {

	const instance = utils.File.createTaillardInstance(path);
	const voisinage = voisins.permute;
	const fitness = (sol) => instance.calculeFitness(sol);
	const params = parametres;
	const solutionInitiale = instance.createSolution(params.shuffleInitialSolution);

  // Appel à recuit :
  let solution = recuit.algo(voisinage, fitness,
  	                          solutionInitiale, params);
	console.log(solution);
}

function test() {
	const path = "taillard/tai12a.dat";
	// console.log(fs.readFileSync(path));
	const instance = utils.File.createTaillardInstance(path);
	console.log(instance);
}

const path = "taillard/tai12a.dat";
main(path, param.group1);
