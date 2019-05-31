const fs = require('fs');

/**
	xi : tableau solution
	nbSolGene : nombre de solutions générées
	*/
class SolutionAlgo { // TODO Il faudra penser à incrémenter les valeurs des équipements (ils vont de 0 à N-1)
  constructor(xi, nbSolGene) {
    this.tab = xi;
    this.nbSolutions = nbSolGene;
  }
}

/**
  permutation : correspond à la permutation à effectuer sur l'ancienne solution
  pour arriver sur la solution courante (this)
*/
class Solution {
  constructor(xi, permutation) {
    let tab = [...xi];

    if(permutation !== undefined) {
      let permut = tab[permutation[0]];
      tab[permutation[0]] = tab[permutation[1]];
      tab[permutation[1]] = permut;

      this.permutation = [...permutation];
    }

    this.tab = tab;
    this.fitness;
  }
}

class Taillard {
  constructor(fileContent) {
    // [0] : tailleProbleme , [1] : distances , [2] : poids
    let tab1 = fileContent.split("\n\n");
    const tailleProbleme = tab1[0].trim();
    const distanceMatrix = getMatrix(tab1[1]);
    const poidsMatrix = getMatrix(tab1[2]);

    this.taille = tailleProbleme;
    this.distances = distanceMatrix;
    this.poids = poidsMatrix;
  }

  calculeFitness(newSol, oldSol) {
    if(oldSol !== undefined) {
      return this._computeFitnessFromSol(newSol, oldSol);
    } else {
      return this._computeFitness(newSol);
    }
  }

  createSolution(aleatoire = false) {
    let sol = Array.from({length: this.taille}, (elt, index) => index);
    if(aleatoire) { shuffle(sol); }
    return new Solution(sol);
  }

  _computeFitnessFromSol(newSol, oldSol) {

  }

  _computeFitness(sol) {
    let sum = 0;
    for (let i = 0; i < this.taille; i++) {
        for (let j = i + 1; j < this.taille; j++) {
            sum += this.poids[i][j] * this.distances[sol.tab[i]][sol.tab[j]];
        }
    }
    sol.fitness = sum;
    return sum;
  }

  _getValue(i, j) {
    return this._getDistance(i, j) * this._getPoids(i, j);
  }

  _getDistance(i, j) {
    return this.distances[i][j];
  }

  _getPoids(i, j) {
    return this.poids[i][j];
  }
}

class File {
  static createTaillardInstance(path) {
    const file = String(fs.readFileSync(path));
    return new Taillard(file);
  }
}

exports.SolutionAlgo = SolutionAlgo;
exports.Solution = Solution;
exports.Taillard = Taillard;
exports.File = File;

// ======================================================
// ================== HELPER FUNCTIONS ==================
// ======================================================

/**
*
*/
function getMatrix(textMatrix) {
  return textMatrix.trim().split("\n").map(line => line.trim().split(/\W+/));
}


function computeFitnessFromOldSolution() {
  // TODO
  return 1;
}

function computeFitness(solution) {
  // TODO
  return 0;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
