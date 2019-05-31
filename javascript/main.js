const voisins = require("voisinage");
const recuit = require("algoRecuit");
const tabou = require("algoTabou");


function main() {
	
	var fitness = function(){};
	var solutionInitiale = [];
	var temperatureInitiale = 37.5;
	var nbChangementsTemperature = 15;
	var nbPasParTemperature = 15;
	var coeffBaisseTemperature = 0.4; // Max 1

  // Appel à recuit :
  let solution = recuit.algo(voisins.permute, fitness,
  	                          solutionInitiale, temperatureInitiale,
  	                          nbChangementsTemperature, nbPasParTemperature,
  	                          coeffBaisseTemperature);
}
